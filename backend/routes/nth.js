const { Router } = require("express");
const { mealTime } = require("../controllers/nth");
const router = Router();

router.get("/", mealTime);

module.exports = router;
