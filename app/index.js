const express = require("express");
const noteRouter = require("./routes/note.route");
const userRouter = require("./routes/user.route");
const { errorGenerator } = require("./utils");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to Notes API created by RastaXarm" });
});
app.get("/status", (req, res) => {
  res.status(200).json({ msg: "(Status) Server is running..." });
});
app.use("/api/users", userRouter);
app.use("/api/notes", noteRouter);

app.all("*", (req, res, next) => {
  next(errorGenerator("Route not Found", 404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    msg: err.message,
    error: true,
    stack: process.env.NODE_ENV !== "production" && err.stack,
  });
});

module.exports = app;
