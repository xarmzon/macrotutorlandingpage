const express = require("express");

const noteRouter = express.Router();

noteRouter.route("/").post().get();
noteRouter.route("/:id").get().put().delete();

module.exports = noteRouter;
