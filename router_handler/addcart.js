// 导入数据库操作模块
const db = require('../db/index')

// 获取文章分类列表数据的处理函数
exports.getcart = (req, res) => {
  const cartInfo = req.body
  const sql = `
    INSERT INTO cart (id,name, num, price,imgurl) 
    VALUES (?,?, ?, ?,?) 
    ON DUPLICATE KEY UPDATE 
      num = num + VALUES(num),
      id=VALUES(id),
      price = VALUES(price),
      imgurl = VALUES(imgurl)
  `

  db.query(sql, [cartInfo.id, cartInfo.name, cartInfo.num, cartInfo.price,cartInfo.imgurl], (err, results) => {
    // 1. 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 2. 插入或更新成功后，查询添加或更新后的数据
    const selectSql = 'SELECT * FROM cart WHERE name = ?'
    db.query(selectSql, [cartInfo.name], (err, results) => {
      // 3. 执行查询 SQL 语句失败
      if (err) return res.cc(err)

      // 4. 执行查询 SQL 语句成功，返回查询结果
      res.send({
        status: 0,
        message: '添加购物车成功！',
        data: results[0],  // 返回匹配的第一条数据
      })
    })
  })
}
