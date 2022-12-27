// 식사시간 라우터(엔드포인트와 동작)

const { Router } = require("express");
const { mealTime } = require("../controllers/nth");
const router = Router();

router.get("/", mealTime);

module.exports = router;
