const emailExists = async (req, res, next) => {
  const { email } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      ok: false,
      msg: "Email already exists",
    });
  }

  next();
};

module.exports = {
  emailExists,
};
