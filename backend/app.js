//app 서버 생성
const express = require("express");
const mysql = require("mysql2");

//import swaggerUi from "swagger-ui-express";
//import swaggerFile from "./swagger/swagger-output.json" assert {type:"json"};

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output.json");

const app = express();

//Swagger UI 설정
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, {explorer: true}));

const db = require("./models/gallery_blog_db.js");
const router = require("./controller/gallery_blog_controller.js");

app.use(express.json());    //JSON 형식의 데이터 파싱할 때 필요
app.set("port", 3000);

app.use("/", router);



app.listen(app.get("port"), () => {
    console.log("Listening on", app.get("port"));
});


//app 서버 실행
/*
app.listen(app.get("port"));
console.log("Listening on", app.get("port"));
*/
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