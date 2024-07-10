// 导入数据库操作模块
const db = require('../db/index')

// 清空购物车的处理函数
exports.clearCart = (req, res) => {
  const sql = 'DELETE FROM cart'

  db.query(sql, (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 检查受影响的行数
    if (results.affectedRows === 0) {
      return res.cc('清空失败，购物车本来就是空的！')
    }

    // 清空成功
    res.send({
      status: 0,
      message: '购物车已清空！'
    })
  })
}
