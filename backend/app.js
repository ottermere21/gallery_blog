//app 서버 생성
const express = require("express");
const mysql = require("mysql2");
const db = require("./models/gallery_blog_db.js");

const app = express();

app.set('port', 3000);

//라우팅
app.get("/", (req, res) => {
    res.send("Hello. Node!"); 
});


app.get("/gallery", (req, res) => {
    db.connection.query(`SELECT * FROM gallery`, (err, results) => {
        if (err) {
            console.log(err);
        }
        res.send(results);
    });
});



app.get("/blog", (req, res) => {
    db.connection.query(`SELECT * FROM blog`, (err, results) => {
        if (err)
            console.log(err);
        res.send(results);
    });
});

/*
app.listen(app.get("port"));
console.log("Listening on", app.get("port"));
*/


app.listen(app.get("port"), () => {
    console.log("Listening on", app.get("port"));
});


//app 서버 실행
/*
app.listen(3000, () => {
    console.log("서버 실행 중");
});
*/

/*
post : 서버로 정보 보낼 때
put : 기존 서버에 있던 자료 수정
delete : 서버에 있는 자료 삭제
get : 조회
*/