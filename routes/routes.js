const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.index);
router.post("/send", indexController.submitted);

module.exports = router;
