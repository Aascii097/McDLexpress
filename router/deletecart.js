// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
const carthandler=require('../router_handler/deletecart')
// 获取食物分类的列表数据
router.post('/deletecart', carthandler.deleteCartItem)
// 向外共享路由对象
module.exports = router