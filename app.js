const express = require("express");
const app = express();

// routers
const authRouter = require("./routes/auth");
const zinesRouter = require("./routes/zines");
const usersRouter = require("./routes/users");

app.use(express.json());

// routes
app.use("/api/v1/auth", authRouter); // login register

app.use("/api/v1/zines", zinesRouter); // createZine, getAllZines, getZineById, deleteZineById, updateZineById, createSeries, getSeriesById, updateSeriesById, deleteSeriesById

app.use("/api/v1/users", usersRouter);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
