// 导入express
const express = require('express')
const joi = require('joi')
// 导入配置文件
const config = require('./config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')
const cors=require('cors')
// 创建服务器的实例对象
const app = express()
//配置解析表单数据的中间件，注意:这个中间件，只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }))
// 响应数据的中间件
app.use(function (req, res, next) {
  // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
  res.send({
  // 状态
  status,
  // 状态描述，判断 err 是 错误对象 还是 字符串
  message: err instanceof Error ? err.message : err,
  })
  }
  next()
  })

app.use(cors({

}))
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/mcdl\//] }))

//导入路由模块
const router=require('./router/user')
app.use('/mcdl',router)
const detailrouter=require('./router/foodsdetail')
app.use('/mcdl',detailrouter)
// 导入并使用食物分类路由模块
const cateRouter = require('./router/foodscategory')
app.use('/mcdl/foods', cateRouter)
const hamburgersRouter = require('./router/hamburger')
app.use('/mcdl/foodsList', hamburgersRouter)
const beverageRouter = require('./router/beverage')
app.use('/mcdl/foodsList', beverageRouter)
const snacksRouter = require('./router/snacks')
app.use('/mcdl/foodsList', snacksRouter)
const dessertsRouter = require('./router/desserts')
app.use('/mcdl/foodsList', dessertsRouter)
const breakfastRouter = require('./router/breakfast')
app.use('/mcdl/foodsList', breakfastRouter)
const addcartsRouter = require('./router/addcarts')
app.use('/my/', addcartsRouter)
// 错误中间件
app.use(function (err, req, res, next) {
  // 数据验证失败
  if (err instanceof joi.ValidationError) return res.cc(err)
    // 捕获身份认证失败的错误
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知错误
  res.cc(err)
  })
// 启动服务器
app.listen(3007,()=>{
  console.log('api server running at http://127.0.0.1:3007')
})
