// 导入数据库操作模块
const db = require('../db/index')

// 删除购物车中某一项的处理函数
exports.deleteCartItem = (req, res) => {
  const { id } = req.body
  const sql = 'DELETE FROM cart WHERE id = ?'

  db.query(sql, [id], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 检查受影响的行数
    if (results.affectedRows === 0) {
      return res.cc('删除失败，未找到该商品！')
    }

    // 删除成功
    res.send({
      status: 0,
      message: '删除购物车商品成功！'
    })
  })
}
