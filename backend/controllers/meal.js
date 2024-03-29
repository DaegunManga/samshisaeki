// 식단 정보 저장, 불러오기, 삭제 로직

const Meal = require("../models/Meal");
const mongoose = require("mongoose");

const saveMeals = async (req, res, next) => {
  try {
    const reqData = req.body;

    console.log(req.data);
    let meals = [];

    reqData.forEach((meal) => {
      meals.push(meal);
    });

    // let meal = new Meal({ date: meals[0]["date"], menu: meals[0]["menu"] });
    // meal = await meal.save();

    meals = await Meal.insertMany(meals);

    return res.status(200).json({
      ok: true,
      meals,
    });
  } catch (err) {
    console.log("err: ", err);
  }
};

const loadMeals = async (req, res, next) => {
  try {
    const meals = await Meal.find({}).exec();

    res.header("Access-Control-Allow-Origin", "*");
    return res.status(200).json({
      ok: true,
      meals,
    });
  } catch (err) {
    console.log("err: ", err);
  }
};

const deleteMeals = async (req, res, next) => {
  try {
    const meals = await Meal.deleteMany({});

    return res.status(204).json({
      ok: true,
      msg: "식단정보 제거에 성공했습니다",
    });
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = {
  saveMeals,
  loadMeals,
  deleteMeals,
};
