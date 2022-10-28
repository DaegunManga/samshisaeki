const { Router } = require("express");
const { mealTime } = require("../controllers/nth");
const router = Router();

router.post("/", mealTime);

module.exports = router;
