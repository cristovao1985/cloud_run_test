const http = require("http");
const express = require("express");
const carRouter = require("./routes/car");

const app = express();

app.use((req, res, next) => {
  if (
    req.originalUrl.startsWith("/uploads") ||
    req.originalUrl.startsWith("/api/status")
  ) {
    next();
  } else {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT,POST,DELETE,PATCH");
    res.header(
      "Access-Control-Allow-Headers",
      "X-PINGOTHER,Content-Type,Authorization"
    );

    next();
  }
});
app.use("/api/car", carRouter);

const PORT = 3000;
const HOST = "0.0.0.0";
app.listen(PORT, HOST);
