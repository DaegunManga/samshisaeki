const Teacher = require("../models/Teacher");

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    let teachers = await Teacher.find({});
    let emails = [];

    teachers.forEach((t) => {
      emails.push(t.email);
    });

    if (emails.includes(email)) {
      next();
    } else {
      return res.status(401).json({
        ok: false,
        msg: err,
      });
    }

    console.log("Teachers: ", teachers);
  } catch (err) {
    return res.status(401).json({
      ok: false,
      msg: err,
    });
  }
};

module.exports = validateEmail;
