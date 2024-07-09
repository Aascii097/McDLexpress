// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
const getcarthandler=require('../router_handler/getcart')
// 获取食物分类的列表数据
router.get('/getcart', getcarthandler.getcart)
// 向外共享路由对象
module.exports = router