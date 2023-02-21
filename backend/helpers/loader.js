// 파이썬으로 크롤링한 정보 받아오는 스크립트

const { spawn } = require("child_process");
const iconv = require("iconv");

const fetchMeals = (req, res, next) => {
  return new Promise((resolve, reject) => {
    try {
      var dataToSend;
      var ic = new iconv.Iconv("euc-kr", "UTF-8");
      const runCommand = spawn("python", ["scrap.py"]);

      runCommand.stdout.on("data", (data) => {
        dataToSend = JSON.parse(data.toString());
      });

      runCommand.on("close", (err) => {
	req.body = dataToSend;
	next();
        resolve(dataToSend);
      });
    } catch (err) {
      reject(err);
    }
  })
};

module.exports = {
  fetchMeals,
};
