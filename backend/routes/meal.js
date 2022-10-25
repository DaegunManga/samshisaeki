const { Router } = require("express");
const { saveMeals, loadMeals, deleteMeals } = require("../controllers/meal");
const { fetchMeals } = require("../helpers/loader");
const router = Router();

router.get("/", loadMeals);
router.post("/", fetchMeals, saveMeals);
router.delete("/", deleteMeals);

module.exports = router;
