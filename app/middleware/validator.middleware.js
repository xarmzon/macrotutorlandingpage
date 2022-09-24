const { errorGenerator } = require("../utils");

exports.validateInputs = (schema, where = "body") => {
  return (req, res, next) => {
    try {
      switch (where) {
        case "body":
          schema.parse(req.body);
          next();
          break;
        default:
          throw new Error("Unknown inputs location");
      }
    } catch (error) {
      if (error.name === "ZodError") {
        return next(errorGenerator(error.message, 400));
      }
      next(error);
    }
  };
};
