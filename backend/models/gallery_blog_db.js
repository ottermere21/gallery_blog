const mysql = require("mysql2");

// DB connection 객체 생성
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '386902',
    database : 'gallery_blog'
});

// MySQL Connection 실행
connection.connect(error => {
    if (error) {
        throw error;
    }
    console.log("Successfully connected to the database.");

});

module.exports = {connection};

// 접속종료
//connection.end();
