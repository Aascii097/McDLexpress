// 导入数据库操作模块
const db = require('../db/index');

// 获取订单列表的处理函数
exports.getOrders = (req, res) => {
  // 构造 SQL 查询语句
  const sql = 'SELECT * FROM order1';

  // 执行 SQL 查询
  db.query(sql, (err, results) => {
    if (err) {
      console.error('查询订单失败:', err);
      return res.status(500).json({ status: 1, message: '查询订单失败' });
    }

    // 查询成功，返回订单列表
    res.status(200).json({
      status: 0,
      message: '查询订单成功！',
      data: results,  // 返回查询结果数组
    });
  });
};
