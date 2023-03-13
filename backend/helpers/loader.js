// 파이썬으로 크롤링한 정보 받아오는 스크립트

const { spawn } = require('child_process');
const iconv = require('iconv');
const axios = require('axios');

const fetchMeals = (req, res, next) => {
  return new Promise((resolve, reject) => {
    try {
      axios.get(`${process.env.MEAL_SERVER_ADDRESS}`).then((response) => {
        req.body = response.data;

        next();
        resolve(response.data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  fetchMeals,
};
