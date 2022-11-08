const { Router } = require("express");
const { check } = require("express-validator");
const { register, login, getProfile } = require("../controllers/auth");

const validateFields = require("../middlewares/validateFields");
const validateEmail = require("../middlewares/validateEmail");
const validateJWT = require("../middlewares/validateJWT");
const validateToken = require("../middlewares/validateToken");

const router = Router();

router.post(
  "/register",
  validateEmail,
  [
    check("name", "이름은 반드시 입력해주세요").not().isEmpty(),
    check("name", "이름은 2글자 이상을 입력해주세요").isLength({
      min: 2,
      max: 32,
    }),
    check("email", "유효한 이메일 형태로 입력해주세요").isEmail(),
    check(
      "password",
      "비밀번호는 대문자, 소문자, 특수문자, 숫자를 최소 하나씩 조합해 8 ~ 32 글자로 만들어주세요"
    ).isStrongPassword(),
    validateFields,
  ],
  register
);

router.post(
  "/login",
  [
    check("email", "이메일을 입력해주세요.").isEmail(),
    check("password", "비밀번호를 입력해주세요").not().isEmpty(),
    validateFields,
  ],
  login
);

router.get("/me", validateToken, validateJWT, getProfile);

module.exports = router;
