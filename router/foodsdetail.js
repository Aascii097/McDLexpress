// 导入 express
const express = require('express')
const expressJoi = require('@escook/express-joi')

const  {get_detail_schema}=require('../schema/detail')
// 创建路由对象
const router = express.Router()
const detailhandler=require('../router_handler/foodsdetail')
// 获取食物分类的列表数据
router.get('/foodsdetail/:id',expressJoi(get_detail_schema), detailhandler.getdetailById)
// 向外共享路由对象
module.exports = router