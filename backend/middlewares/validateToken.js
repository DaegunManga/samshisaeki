const validateToken = (req, res, next) => {
  const bearerHeader = req.headers["token"];
  //   console.log(req.headers["authorization"]);

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    return res.status(403).json({
      ok: false,
      msg: "토큰이 존재하지 않습니다.",
    });
  }
};

module.exports = validateToken;
