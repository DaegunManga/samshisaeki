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
        throw new CustomError({
          type: ErrorType.FORBIDDEN,
          message: "Not allowed access by cors",
        });
      }
    },
    credentials: true,
  };
}

module.exports = { corsSetup };
