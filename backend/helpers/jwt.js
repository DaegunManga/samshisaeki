const jwt = require("jsonwebtoken");

const generateJWT = (id, name) => {
  return new Promise((resolve, reject) => {
    const payload = { id, name };

    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" },
      (err, token) => {
        if (err) {
          console.log("JWT Generation Error: ", err);
          reject("JWT 토큰을 생성할 수 없습니다!");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = generateJWT;
