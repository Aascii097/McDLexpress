const joi = require('joi')
const { param } = require('../router/user')
const id = joi.number().integer().min(1).required()
// 密码的验证规则

exports.get_detail_schema = {
// 表示需要对 req.body 中的数据进行验证
params: {
    id,
  },
  }