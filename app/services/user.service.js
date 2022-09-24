const UserModel = require("../models/User.model");
const { hash, compare } = require("bcryptjs");
const { generateToken } = require("./token.service");

exports.createHashPassword = async (password, salt = 10) =>
  await hash(password, salt);

exports.createAccountService = async ({
  fullName,
  username,
  email,
  password,
  userType = "user",
}) => {
  const p = await createHashPassword(password);
  const user = await UserModel.create({
    fullName,
    username,
    email,
    password: p,
    userType,
  });
  return { ...user.toObject(), password: undefined };
};

exports.loginAccountServices = async ({ usernameOrEmail, password }) => {
  const user = await UserModel.find({
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
  });
  if (!user) {
    return { error: true, msg: "No User Found", status: 404 };
  }
  const validPass = await compare(password, user.password);
  if (!validPass) {
    return { error: true, msg: "Invalid user password", status: 400 };
  }
  const tokenData = { id: user._id, userType: user.userType };
  const token = generateToken(tokenData);
  const refresh = generateToken(tokenData, "refresh");
  return { ...user.toObject(), password: undefined, token, refresh };
};
