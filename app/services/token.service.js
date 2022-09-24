const { sign, verify } = require("jsonwebtoken");
const key = {
  access: process.env.JWT_TOKEN || "KEYY",
  refresh: process.env.JWT_REFRESH_TOKEN || "KEYY_fresh",
};
exports.generateToken = async (data, type = "access") => {
  return await sign(data, key[type], {
    expiresIn: type === "access" ? "2m" : "7d",
  });
};

exports.verifyToken = async (token, type = "access") => {
  return await verify(token, key[type]);
};
