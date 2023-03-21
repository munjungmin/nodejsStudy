'use strict';

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home/index");  
});

router.get("/login", (req, res) => {
    res.render("home/login");
});

module.exports = router;   // 이 파일을 사용할 수 있도록 외부로 내보내는 명령어