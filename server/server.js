const app = require("./app.js");
const connectDatabase = require('./config/database.js'); 
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Connecting to the database
connectDatabase();

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to an uncaught exception");

  process.exit(1);
});

// Start server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// Handling Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to an unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
