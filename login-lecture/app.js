// http로 서버 띄우기
// 경로를 지정하지 않으면 계속 로딩 표시가 뜸 
const http = require("http");  // 내장모듈이라 npm으로 다운받을 필요 없음
const app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    if (req.url === '/'){
        res.end("여기는 루트입니다.");
    } else if (req.url === '/login') {
        res.end("여기는 로그인 화면입니다.");
    }
});

app.listen(3001, () => {
    console.log("http로 가동된 서버입니다.");
});


// express로 서버 띄우기
// const express = require("express");
// const app = express();

// // root 
// app.get("/", (req, res) => {   // request response
//     res.send("여기는 루트입니다.");
// });

// // root/login
// app.get("/login", (req, res) => {
//     res.send("여기는 로그인 화면입니다.");
// });

// app.listen(3000, () => {
//     console.log("서버 가동");
// });

// // Cannot GET 뜨면 서버에 접속한 것임
// // 웹서버 띄우기 
// // 브라우저가 요청한 경로로 이동해주는 라우팅 기능 구현 
// // ctrl + c : node 종료 

