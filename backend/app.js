const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cron = require("node-cron");
const moment = require("moment-timezone");
const logger = require("morgan");
const axios = require("axios");
const dbConnection = require("./database/config");

const app = express();
dbConnection();
moment.tz.setDefault("Asia/Seoul");

require("dotenv").config();

// 3rd Party Modules
app.use(logger("dev"));
// app.use(helmet());
// app.use(cors);

// run express
app.use(express.json());

//auto db

cron.schedule("0 0 * * 1", async () => {
  try {
    const deleteMeal = await axios.delete(`${process.env.API}/meal`);
    const updateMeal = await axios.post(`${process.env.API}/meal`);

    if (!deleteMeal.data) {
      console.log("식단 삭제 성공");
    }

    if (updateMeal.data.ok) {
      console.log(`
식단 갱신 결과: ${updateMeal.data.meals.length}개
식단 갱신 날짜: ${moment().format("YYYY-MM-DD")}
      `);
    }
  } catch (err) {
    console.log("Error: ", err);
  }
});

// routers
app.use("/samshiseaki/auth", require("./routes/auth"));
app.use("/samshiseaki/meal", require("./routes/meal"));
app.use("/samshiseaki/nth", require("./routes/nth"));
app.use("/samshiseaki/teacher", require("./routes/teacher"));

// listening port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
