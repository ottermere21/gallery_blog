const express = require("express");
const db = require("../models/gallery_blog_db.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, Node!");
});

//갤러리 조회
router.get("/gallery", (req, res) => {
    db.connection.query(`SELECT * FROM gallery`, (err, results) => {
        if (err) {
            console.log(err);
        }
        res.send(results);
    });
});

//갤러리 생성
router.post("/gallery", (req, res) => {
    const {gallery_title, gallery_image_url} = req.body;  //구조분해 할당
    const gallery_date = new Date();    //현재 날짜로 설정
    const query = "INSERT INTO gallery (gallery_title, gallery_date, gallery_image_url) VALUES (?, ?, ?)";

    db.connection.query(query, [gallery_title, gallery_date, gallery_image_url], (err, results) => {
        if (err)
            console.log(err);
        res.send("Gallery item created successfully");
    });
});

//갤러리 수정
router.put("/gallery/:gallery_id", (req,res) => {
    const {gallery_id} = req.params;
    const {gallery_title, gallery_image_url} = req.body;
    const gallery_date = new Date(); //수정된 날짜로 설정
    const query = "UPDATE gallery SET gallery_title = ?, gallery_date = ?, gallery_image_url = ? WHERE gallery_id = ?";

    db.connection.query(query, [gallery_title, gallery_date, gallery_image_url, gallery_id], (err, result) => {
        if (err)
            console.log(err);
        req.send("Gallery item updated successfully");
    });
});

//갤러리 삭제
router.delete("/gallery/:gallery_id", (req, res) => {
    const {gallery_id} = req.params;
    const query = "DELETE FROM gallery WHERE gallery_id = ?";

    db.connection.query(query, [gallery_id], (err, result) => {
        if (err) 
            console.log(err);
        res.send("Gallery item deleted successfully");
    });
});


//블로그 조회
router.get("/blog", (req, res) => {
    db.connection.query(`SELECT * FROM blog`, (err, results) => {
        if (err)
            console.log(err);
        res.send(results);
    });
});


//블로그 생성
router.post("/blog", (req, res) => {
    const {blog_id} = req.params;
    const {blog_title, blog_writer, blog_content} = req.body;
    const blog_date = new Date();
    const query = "INSERT INTO blog (blog_title, blog_writer, blog_date, blog_content) VALUES (?, ?, ?, ?)";

    db.connection.query(query, [blog_title, blog_writer, blog_date, blog_content], (err, result) => {
        if (err)
            console.log(err);
        res.send("Blog item created successfully");
    });

});

//블로그 수정
router.put("/blog/:blog_id", (req, res) => {
    const {blog_id} = req.params;
    const {blog_title, blog_writer, blog_content} = req.body;
    const blog_date = new Date(); //수정된 날짜로 설정
    const query = "UPDATE blog SET blog_title = ?, blog_date = ?, blog_content = ? WHERE blog_id = ?";

    db.connection.query(query, [blog_title, blog_date, blog_content, blog_id], (err, result) => {
        if (err)
            console.log(err);
        res.send("Blog item updated successfully")
    })

});

//블로그 삭제
router.delete("/blog/:blog_id", (req, res) => {
    const {blog_id} = req.params;
    const query = "DELETE FROM blog WHERE blog_id = ?";

    db.connection.query(query, [blog_id], (err, result) => {
        if (err)
            console.log(err);
        res.send("Blog item deleted successfully");
    });
});


//회원가입

//로그인

module.exports = router;