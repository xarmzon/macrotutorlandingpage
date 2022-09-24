const {
  createAccountService,
  loginAccountServices,
} = require("../services/user.service");

exports.addAccount = async (req, res, next) => {
  try {
    const { fullName, username, email, password } = req.body;
    const resp = await createAccountService({
      fullName,
      username,
      email,
      password,
    });
    res.status(201).json({ msg: "Account created successfully", data: resp });
  } catch (error) {
    next(error);
  }
};

exports.loginAccount = async (req, res, next) => {
  try {
    const { usernameOrEmail, password } = req.body;
    const resp = await loginAccountServices({ usernameOrEmail, password });
    res.status(200).json({ msg: "Account Logged in successfully", data: resp });
  } catch (error) {
    next(error);
  }
};

exports.logoutAccount = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.getAccount = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
