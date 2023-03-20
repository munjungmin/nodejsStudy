const express = require("express");
const app = express();

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");  // html 코드를 어떤 엔진으로 해석할지 결정


app.get("/", (req, res) => {
    res.render("home/index");  // 위에 뷰를 views라는 폴더로 지정했으므로
});

app.get("/login", (req, res) => {
    res.render("home/login");
});

app.listen(3000, () => {
    console.log("서버 가동");
});


