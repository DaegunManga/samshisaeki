const { spawn } = require("child_process");
const iconv = require("iconv");

const fetchMeals = (req, res, next) => {
  return new Promise((resolve, reject) => {
    try {
      var dataToSend;
      var ic = new iconv.Iconv("euc-kr", "UTF-8");
      const runCommand = spawn("python", ["scrap.py"]);

      runCommand.stdout.on("data", (data) => {
        dataToSend = ic.convert(data).toString("utf-8");
        dataToSend = JSON.parse(dataToSend);
      });

      runCommand.on("close", (err) => {
        resolve(dataToSend);
      });
    } catch (err) {
      reject(err);
    }
  }).then((data) => {
    req.body = data;
    next();
  });
};

module.exports = {
  fetchMeals,
};
