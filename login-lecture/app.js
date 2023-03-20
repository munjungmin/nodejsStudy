const express = require("express");
const app = express();

// root 
app.get("/", (req, res) => {   // request response
    res.send("여기는 루트입니다.");
});

// root/login
app.get("/login", (req, res) => {
    res.send("여기는 로그인 화면입니다.");
});

app.listen(3000, () => {
    console.log("서버 가동");
});

// Cannot GET 뜨면 서버에 접속한 것임
// 웹서버 띄우기 
// 브라우저가 요청한 경로로 이동해주는 라우팅 기능 구현 
// ctrl + c : node 종료 

