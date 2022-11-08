const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateJWT = require("../helpers/jwt");

const register = async (req, res) => {
  const { id, email, password } = req.body;

  try {
    let userEmail = await User.findOne({ email });
    let userId = await User.findOne({ id });

    if (userEmail) {
      return res.status(400).json({
        ok: false,
        msg: "이미 등록된 이메일입니다",
      });
    }

    if (userId) {
      return res.status(400).json({
        ok: false,
        msg: "이미 등록된 아이디입니다",
      });
    }

    user = new User(req.body);
    // console.log("user: ", user);

    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);

    user = await user.save();

    const token = await generateJWT(user.id, user.name);

    return res.status(201).json({
      ok: true,
      user,
      token,
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

const login = async (req, res) => {
  const { id, email, password } = req.body;

  try {
    const userEmail = await User.findOne({ email });
    const userId = await User.findOne({ id });
    const userExist = userEmail || userId;
    if (!userExist) {
      return res.status(404).json({
        ok: false,
        msg: "존재하지 않는 아이디나 이메일입니다. 회원가입 후 이용해주세요.",
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    console.log("isPasswordValid: ", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({
        ok: false,
        msg: "이메일과 패스워드가 일치하는지 확인하고 다시 입력하세요.",
      });
    }

    user = userExist;

    const token = await generateJWT(user.id, user.name);

    return res.status(200).json({
      ok: true,
      user,
      token,
    });
  } catch (err) {
    console.log("err: ", err);
  }
};

const getProfile = async (req, res, next) => {
  const { id, name } = req.body;

  try {
    const user = await User.findById(id);

    user.password = "";

    res.status(200).json({
      ok: true,
      msg: "성공적으로 프로필을 불러왔습니다",
      user,
    });
  } catch (err) {
    res.status(403).json({
      ok: false,
      msg: "유효하지 않은 토큰입니다",
    });
  }
};

module.exports = {
  register,
  login,
  getProfile,
};
