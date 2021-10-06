const http = require("http");
const controller = require("../controllers/car");
const express = require("express");
const router = express.Router();

router.get("/", controller.list);

module.exports = router;
