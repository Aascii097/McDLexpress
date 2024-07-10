// 导入数据库操作模块
const db = require('../db/index');

// 添加订单的处理函数
exports.addOrder = (req, res) => {
  const cartInfo = req.body;
  const sql = `
    INSERT INTO order1 (id, name, price) 
    VALUES (?, ?, ?)
  `;

  db.query(sql, [cartInfo.id, cartInfo.name, cartInfo.price], (err, results) => {
    if (err) {
      console.error('插入订单失败:', err);
      return res.status(500).json({ status: 1, message: '添加订单失败' });
    }

    // 插入成功后查询添加后的数据
    const selectSql = 'SELECT * FROM order1 WHERE id = ?';
    db.query(selectSql, [cartInfo.id], (err, results) => {
      if (err) {
        console.error('查询订单失败:', err);
        return res.status(500).json({ status: 1, message: '查询订单失败' });
      }

      // 返回查询结果
      res.status(200).json({
        status: 0,
        message: '添加订单成功！',
        data: results[0],  // 返回匹配的第一条数据
      });
    });
  });
};
