const moment = require("moment");
moment.locale("ko");

const mealTime = async (req, res, next) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");

    const curTime = moment().milliseconds("0");
    const breakfastStart = moment().hours("06").minutes("50").seconds("00");
    const breakfastEnd = moment().hours("07").minutes("50").seconds("00");
    const lunchStart = moment().hours("12").minutes("20").seconds("00");
    const lunchEnd = moment().hours("13").minutes("05").seconds("00");
    const dinnerStart = moment().hours("18").minutes("20").seconds("00");
    const dinnerEnd = moment().hours("19").minutes("05").seconds("00");
    // const testStart = moment().hours("22").minutes("40").seconds("00");
    // const testEnd = moment().hours("23").minutes("00").seconds("00");

    if (curTime.isBetween(breakfastStart, breakfastEnd)) {
      gradeTime(res, curTime, breakfastStart, breakfastEnd, "Breakfast");
    }
    if (curTime.isBetween(lunchStart, lunchEnd)) {
      gradeTime(res, curTime, lunchStart, lunchEnd, "Lunch");
    }
    if (curTime.isBetween(dinnerStart, dinnerEnd)) {
      gradeTime(res, curTime, dinnerStart, dinnerEnd, "Dinner");
    } else {
      return res.status(200).json({
        ok: true,
        msg: "지금은 급식시간이 아닙니다",
      });
    }
  } catch (err) {
    console.log("err: ", err);
  }
};

const gradeTime = (res, cur, start, end, time) => {
  try {
    let duringMeal = 0;
    if (time == "Breakfast") {
      duringMeal = 20;
    } else {
      duringMeal = 15;
    }

    if (cur.diff(start, "minutes") <= duringMeal) {
      return res.status(200).json({
        ok: true,
        grade: "3rd",
        time: time,
      });
    }
    if (end.diff(cur, "minutes") <= duringMeal) {
      return res.status(200).json({
        ok: true,
        grade: "1st",
        time: time,
      });
    } else {
      return res.status(200).json({
        ok: true,
        grade: "2nd",
        time: time,
      });
    }
  } catch (err) {
    console.log("err: ", err);
  }
};

module.exports = {
  mealTime,
  gradeTime,
};
