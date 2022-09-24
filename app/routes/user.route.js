const express = require("express");
const { addAccount, loginAccount } = require("../controllers/user.controller");
const { authValidator } = require("../middleware/auth.middleware");
const { validateInputs } = require("../middleware/validator.middleware");
const {
  userLoginSchema,
  userAccountSchema,
} = require("../schemas/user.schema");

const userRouter = express.Router();

userRouter
  .route("/register")
  .post(validateInputs(userAccountSchema), addAccount);
userRouter.route("/login").post(validateInputs(userLoginSchema), loginAccount);
userRouter.route("/:id", authValidator).get().put().delete();

module.exports = userRouter;
