const express = require("express");
const router = express.Router();
const IndexController = require("../controllers/appController");

router.get("/", (req, res) => {
  IndexController.getRequest(req, res);
});

module.exports = router;
