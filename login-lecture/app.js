'use strict';

// 모듈
const express = require("express");
const app = express();

const PORT = 3000;
// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");  

app.use("/", home);   // use: 미들웨어를 등록해주는 메소드 

app.listen(PORT, () => {
    console.log("서버 가동");
});

// routing: 어떤 네트워크 안에서 통신 데이터를 보낼 때 최적의 경로를 선택하는 과정 


