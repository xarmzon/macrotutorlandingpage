const app = require("./app");
const { connectDB } = require("./app/config/db");

const PORT = process.env.PORT || 8000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server Running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Starting Server Error: ${error.message}`);
  }
};

startServer();
