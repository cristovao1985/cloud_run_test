const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.get("/", userController.list);
router.post("/", userController.insert);

module.exports = router;