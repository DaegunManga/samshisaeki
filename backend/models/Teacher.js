const { Schema, model } = require("mongoose");

const TeacherSchema = Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "이메일을 입력해주세요"],
  },
});

module.exports = model("Teacher", TeacherSchema);
