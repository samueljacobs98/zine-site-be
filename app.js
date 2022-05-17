require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// get database
const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/auth");
const zinesRouter = require("./routes/zines");
const usersRouter = require("./routes/users");

// authentication
const authenticateUser = require("./middleware/authentication");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/zines", authenticateUser, zinesRouter);
app.use("/api/v1/users", authenticateUser, usersRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
