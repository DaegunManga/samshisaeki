// CORS 인증

function corsSetup(whitelists) {
  const whiltelist = whitelists.split(",");
  let corsOptions = {};

  if (whitelists === "*") {
    corsOptions = {
      origin: true,
      credentials: true,
    };
    return;
  }
  corsOptions = {
    origin: (origin, cb) => {
      if (whiltelist.indexOf(origin) !== -1) {
        cb(null, true);
      } else {
        res.status(403).json({
          ok: false,
          msg: "Not allowed access by cors",
        });
      }
    },
    credentials: true,
  };
}

module.exports = { corsSetup };
