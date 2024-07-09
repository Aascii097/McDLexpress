// 导入数据库操作模块
const db = require('../db/index')
exports.getdetailById=(req,res)=>{
  const sql=`select * from foodsdetail where id=?`
  db.query(sql, req.params.id, (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
  
    // SQL 语句执行成功，但是影响行数不等于 1
    if (results.length !== 1) return res.cc('获取食物细节失败！')
  
    res.send({
      status: 0,
      message: '获取食物细节成功！',
      data: results[0],
    })
  })
}