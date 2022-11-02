// teachers DB에 이메일 박아놔야함
const teachers = require("../database/teachers");

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (teachers.includes(email)) {
    next();
  } else {
    return res.status(401).json({
      ok: false,
      msg: "해당 이메일은 회원가입 권한이 없습니다.",
    });
  }
};

module.exports = validateEmail;
