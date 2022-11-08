const moment = require("moment-timezone");

const mealTime = async (req, res, next) => {
  try {
    moment.tz.setDefault("Asia/Seoul");
    res.header("Access-Control-Allow-Origin", "*");

    const curTime = moment().milliseconds("0");
    const breakfastStart = moment().hours("06").minutes("50").seconds("00");
    const breakfastEnd = moment().hours("07").minutes("50").seconds("00");
    const lunchStart = moment().hours("12").minutes("20").seconds("00");
    const lunchEnd = moment().hours("13").minutes("05").seconds("00");
    const dinnerStart = moment().hours("18").minutes("20").seconds("00");
    const dinnerEnd = moment().hours("19").minutes("05").seconds("00");
    // const testStart = moment().hours("22").minutes("50").seconds("00");
    // const testEnd = moment().hours("23").minutes("50").seconds("00");

    if (curTime.isBetween(breakfastStart, breakfastEnd)) {
      gradeTime(res, curTime, breakfastStart, breakfastEnd, "Breakfast");
    } else if (curTime.isBetween(lunchStart, lunchEnd)) {
      gradeTime(res, curTime, lunchStart, lunchEnd, "Lunch");
    } else if (curTime.isBetween(dinnerStart, dinnerEnd)) {
      gradeTime(res, curTime, dinnerStart, dinnerEnd, "Dinner");
    } else {
      return res.status(200).json({
        ok: true,
        msg: "지금은 급식시간이 아닙니다",
        time: curTime,
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
        msg: "지금은 3학년 급식시간입니다",
        time: time,
      });
    } else if (end.diff(cur, "minutes") <= duringMeal) {
      return res.status(200).json({
        ok: true,
        msg: "지금은 1학년 급식시간입니다",
        time: time,
      });
    } else {
      return res.status(200).json({
        ok: true,
        msg: "지금은 2학년 급식시간입니다",
        time: time,
      });
    }
  } catch (err) {
    console.log("err: ", err);
  }
};

module.exports = {
  mealTime,
};
