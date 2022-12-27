// web-push 라우터(엔드포인트와 동작)

const { Router } = require("express");
const { register, alert } = require("../controllers/notice");
const router = Router();

router.post("/register", register);
router.get("/alert", alert);

module.exports = router;
