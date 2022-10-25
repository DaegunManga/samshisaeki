const express = require("express");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: 3306,
  database: "samshi_DB",
});
connection.connect();

const spawn = require("child_process").spawn;
const Iconv = require("iconv").Iconv;

const app = express();

app.use(express.json());

app.get("/", function (_, response) {
  const menuList = spawn("py", ["./scrap.py"]);

  menuList.stdout.on("data", (result) => {
    response.send(new Iconv("euc-kr", "UTF-8").convert(result).toString());
  });
});

app.get("/nth", function (request, response) {});

app.post("/nth", function (request, response) {});

async function checkUser(email, password) {
  if (email && password) {
    // sql 쿼리로 유저인증

    connection.query(
      `select * from Users Where User_email = '${email}'`,
      (err, data) => {
        if (err) return true;
      }
    );
  }
  return false;
}

app.post("/register", async function (request, response) {
  const { email, password } = request.body;
  const isUserExists = await checkUser(email, password);

  if (!isUserExists) {
    // sql 쿼리로 유저정보 email, password 입력
    connection.query(
      `Insert INTO Users (User_email, User_password) VALUES ('${email}', '${password}')`,
      (err, data) => {
        if (err) {
          response.sendStatus(400);
          return;
        }
        response.sendStatus(201);
      }
    );
  }
});

app.post("/login", function (request, response) {
  const { email, password } = request.body;
  if (checkUser(email, password)) {
    // 로그인 결과
    response.sendStatus(200);
  } else {
    // 로그인 실패 페이지
    throw new Error({ statusCode: 401, message: "Unauthorized" });
  }
});

app.listen(3001, function () {
  console.log(`localhost:3001`);
});
