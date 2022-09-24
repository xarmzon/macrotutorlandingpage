const { errorGenerator } = require("../utils");
const jwt = require("jsonwebtoken");

exports.authValidator = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return next(errorGenerator("No authorization header supplied", 400));
    }
    const token = authorization.split(" ")[1];
    //todo: jwt validation
    const tokenData = jwt.verify(token);
    req.userType = tokenData?.userType;
    req.userId = tokenData?.userId;
    next();
  } catch (error) {
    next(error);
  }
};

exports.userRequired =
  (types = []) =>
  async (req, res, next) => {
    try {
      if (!types.includes(req.userType))
        return next(
          errorGenerator("You are not allowed to access this endpoint", 401)
        );
      next();
    } catch (error) {
      next(error);
    }
  };

exports.sameAccountRequired = (req, res, next, id) => {
  try {
    if (req.userId !== id) {
      return next(
        errorGenerator("You are not allowed to update another user's data", 401)
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};
