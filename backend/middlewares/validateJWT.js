const jwt = require("jsonwebtoken");
const { generateJWT } = require("../helpers/jwt");

const validateJWT = (req, res, next) => {
  const token = req["token"];
  // console.log("token: ", token);

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "토큰이 존재하지 않습니다.",
    });
  }

  try {
    const { id, name } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("id: ", id, "name: ", name);

    req.body.id = id;
    req.body.name = name;

    next();
  } catch (err) {
    return res.status(205).json({
      ok: false,
      token: token,
    });
    // return res.status(401).json({
    //   ok: false,
    //   msg: "유효하지 않은 토큰입니다.",
    // });
  }
};

module.exports = validateJWT;
