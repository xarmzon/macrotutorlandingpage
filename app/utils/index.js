exports.errorGenerator = (msg = "An Error Occurred", status = 500) => {
  const err = new Error(msg);
  err.status = status;
  return err;
};
