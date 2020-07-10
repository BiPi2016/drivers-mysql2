const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const userRoutes = require("./routes/api/user.routes");
const authRoutes = require("./routes/api/auth.routes");

const app = express();

//cors
const corsOptions = {
  origin: process.env.FRONT_END,
};
app.use(cors(corsOptions));

//Init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Log requests
app.use(morgan("combined"));

//Routing
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//Error handlers
app.use((req, res, next) => {
  const error = new Error("Requested resource not found");
  error.status = 400;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ errors: [{ msg: err.message }] });
});

module.exports = app;
