// 导入数据库操作模块
const db = require('../db/index')
// 获取文章分类列表数据的处理函数
exports.getbeverage = (req, res) => {
const sql=`select * from beverage order by id asc`
db.query(sql, (err, results) => {
  // 1. 执行 SQL 语句失败
  if (err) return res.cc(err)
  // 2. 执行 SQL 语句成功
  res.send({
  status: 0,
  message: '获取饮品分类列表成功！',
  data: results,
  })
  })
  }