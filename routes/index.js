const express = require("express");
const router = express.Router();

const HomePageController = require("./../controllers/homepage_controller");

router.get("/", HomePageController.index);

module.exports = router;