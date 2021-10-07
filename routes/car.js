const http = require("http");
const controller = require("../controllers/car");
const express = require("express");
const router = express.Router();

router.get("/", controller.list);
router.post("/", controller.insert);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
