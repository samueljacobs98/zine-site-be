require("dotenv").config();

const express = require("express");
const app = express();

// get database
const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/auth");
const zinesRouter = require("./routes/zines");
const usersRouter = require("./routes/users");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/zines", zinesRouter);
app.use("/api/v1/users", usersRouter);

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
