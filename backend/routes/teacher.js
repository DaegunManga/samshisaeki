const { Router } = require("express");
const { createTeacher } = require("../controllers/teacher");
const router = Router();

router.post("/", createTeacher);

module.exports = router;
