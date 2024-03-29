// 서버 구동 메인 스크립ㅌ트

const express = require("express");
const cron = require("node-cron");
const moment = require("moment-timezone");
const logger = require("morgan");
const axios = require("axios");
const dbConnection = require("./database/config");
const { corsSetup } = require("./middlewares/cors");

const app = express();
dbConnection();
moment.tz.setDefault("Asia/Seoul");

require("dotenv").config();

// 3rd Party Module
app.use(logger("dev"));

corsSetup(process.env.CORS_WHITELISTS);

// express 실행
app.use(express.json());
app.use("/static", express.static("static"));

//DB 자동 업데이트 예약

const updateDB = async () => {
  try {
    const deleteMeal = await axios.delete(`${process.env.API}/meal`);
    const updateMeal = await axios.post(`${process.env.API}/meal`);

    if (!deleteMeal.data) {
      console.log("식단 삭제 성공");
    }

    if (updateMeal.data.ok) {
      console.log(`식단 갱신 결과: ${updateMeal.data.meals.length}개`);
      console.log(`식단 갱신 날짜: ${moment().format("YYYY-MM-DD")}`);
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}

cron.schedule("0 0 0 * * MON", () => {updateDB()});

// routers
app.use("/samshiseaki/auth", require("./routes/auth"));
app.use("/samshiseaki/meal", require("./routes/meal"));
app.use("/samshiseaki/nth", require("./routes/nth"));
app.use("/samshiseaki/teacher", require("./routes/teacher"));
app.use("/samshiseaki/notice", require("./routes/notice"));

// 포트 정보
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);

  updateDB();
});
