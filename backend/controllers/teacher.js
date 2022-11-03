const data = require("../database/teachers");
const Teacher = require("../models/Teacher");

const createTeacher = async (req, res, next) => {
  try {
    let teachers = [];

    data.forEach((tEmail) => {
      teachers.push({ email: tEmail });
    });

    teachers = await Teacher.insertMany(teachers);

    res.status(200).json({
      ok: true,
      teachers,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: "관리자에게 문의해주세요.",
    });
  }
};

module.exports = {
  createTeacher,
};
