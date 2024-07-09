// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
const breakfasthandler=require('../router_handler/breakfast')
// 获取食物分类的列表数据
router.get('/breakfast', breakfasthandler.getbreakfast)
// 向外共享路由对象
module.exports = router