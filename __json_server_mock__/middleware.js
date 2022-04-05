/*
 * @Author: vivien
 * @Date: 2022-04-05 16:44:00
 * @Last Modified by: vivien
 * @LastEditTime: 2022-04-05 16:56:07
 */
module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "jack" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({ message: "用户名或者密码错误" });
    }
  }
  next();
};
