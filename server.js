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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("running...");
});
