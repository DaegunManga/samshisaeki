const {
  PushSubscription,
  sendNotification,
  setVapidDetails,
} = require("web-push");
require("dotenv").config();
const axios = require("axios");

/**
 * @type {PushSubscription[]}
 */
const tokenList = [];

const register = (req, res) => {
  try {
    tokenList.push(req.body.subscription);
    res.status(200).json({
      ok: true,
      msg: "register success",
    });
  } catch (err) {
    console.log("err: ", err);
  }
};

const alert = async (req, res) => {
  const options = {
    TTL: 24 * 60 * 60,
    vapidDetails: {
      subject: `http://localhost:${process.env.PORT}`,
      publicKey: process.env.VAPID_PUBLIC_KEY,
      privateKey: process.env.VAPID_PUBLIC_KEY,
    },
  };
  const grade = await axios.get(`${process.env.API}/nth`);
  const payload = JSON.stringify({
    title: "대건세끼",
    msg: `${grade}학년 내려오세요`,
    icon: `http://localhost:${process.env.PORT}/static/logo.svg`,
    ...req.query,
  });

  try {
    console.log(tokenList);
    await Promise.all(
      tokenList.map((t) => sendNotification(t, payload, options))
    );
    return res.status(200);
  } catch (err) {
    console.log("err: ", err);
  }
};

module.exports = {
  register,
  alert,
};
