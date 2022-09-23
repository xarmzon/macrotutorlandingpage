const express = require("express");
const { addAccount } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.route("/").post(addAccount).get();
userRouter.route("/:id").get().put().delete();

module.exports = userRouter;
