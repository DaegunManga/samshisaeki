const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "이름을 입력해주세요..."],
    },

    email: {
      type: String,
      required: [true, "이메일을 입력해주세요..."],
    },

    id: {
      type: String,
      required: [true, "id를 입력해주세요..."],
    },

    password: {
      type: String,
      required: [true, "비밀번호를 입력해주세요..."],
    },
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema);
