// 선생님 이메일 정보 등록용 라우터 (엔드포인트와 동작) / db 작업용 일회용

const { Router } = require("express");
const { createTeacher } = require("../controllers/teacher");
const router = Router();

router.post("/", createTeacher);

module.exports = router;
