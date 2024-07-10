// 导入数据库操作模块
const db = require('../db/index')

// 修改购物车中某一项数量的处理函数
exports.updateCartItem = (req, res) => {
  const { id, num } = req.body
  const sql = 'UPDATE cart SET num = ? WHERE id = ?'

  db.query(sql, [num, id], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 检查受影响的行数
    if (results.affectedRows === 0) {
      return res.cc('更新失败，未找到该商品！')
    }

    // 更新成功，查询更新后的数据
    const selectSql = 'SELECT * FROM cart WHERE id = ?'
    db.query(selectSql, [id], (err, results) => {
      // 执行查询 SQL 语句失败
      if (err) return res.cc(err)

      // 执行查询 SQL 语句成功，返回查询结果
      res.send({
        status: 0,
        message: '更新购物车商品数量成功！',
        data: results[0],  // 返回匹配的第一条数据
      })
    })
  })
}
