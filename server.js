const express = require("express");
const carRouter = require("./routes/car");
const bodyparser = require("body-parser");

const app = express();
app.use(
  bodyparser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(bodyparser.json({ limit: "50mb" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER,Content-Type,Authorization"
  );

  next();
});
app.use("/api/car", carRouter);

const PORT = 3000;
const HOST = "0.0.0.0";
app.listen(PORT, HOST);
