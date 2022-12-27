// 식단정보 라우터(엔드포인트와 동작)

const { Router } = require("express");
const { saveMeals, loadMeals, deleteMeals } = require("../controllers/meal");
const { fetchMeals } = require("../helpers/loader");
const router = Router();

router.get("/", loadMeals);
router.post("/", fetchMeals, saveMeals);
router.delete("/", deleteMeals);

module.exports = router;
