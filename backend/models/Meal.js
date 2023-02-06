// 식단 정보 DB 스키마

const { Schema, model } = require("mongoose");

const MealSchema = Schema(
  {
    date: {
      type: String,
      required: [true, ""],
    },

    menu: [String],
  },
  { timestamps: true }
);

module.exports = model("Meal", MealSchema);
