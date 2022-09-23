const express = require("express");
const noteRouter = require("./routes/note.route");
const userRouter = require("./routes/user.route");
const { errorGenerator } = require("./utils");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/notes", noteRouter);

app.all("*", (req, res, next) => {
  next(errorGenerator("Route not Found", 404));
});

app.use((err, req, res, next) => {
  res.status(err.status).json({ msg: err.message, error: true });
});

module.exports = app;
