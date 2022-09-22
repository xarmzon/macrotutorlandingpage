const {
  connect,
  connection: { close },
} = require("mongoose");

exports.connectDB = async (URI) => {
  try {
    await connect(URI || process.env.DB_URI);
  } catch (err) {
    console.log("Error connecting to Database");
    console.log(err.message);
    process.exit(1);
  }
};

exports.disconnectDB = async () => {
  try {
    await close();
  } catch (error) {
    console.log(`Error Disconnecting from DB: ${error.message}`);
  }
};
