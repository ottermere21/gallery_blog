DROP TABLE IF EXISTS blog;
DROP TABLE IF EXISTS gallery; 

#테이블 생성
CREATE TABLE blog(
	blog_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    blog_title VARCHAR(30) NOT NULL,
    blog_writer VARCHAR(10) NOT NULL,
    blog_date DATETIME NOT NULL,
    blog_content TEXT NOT NULL,
    blg_likes INT UNSIGNED DEFAULT 0,
    blg_dislikes INT UNSIGNED DEFAULT 0,
    
    );

CREATE TABLE gallery(
	gallery_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    gallery_title VARCHAR(20) NOT NULL,
    gallery_date DATE NOT NULL,
    gallery_image_url VARCHAR(255) NOT NULL
);

CREATE TABLE Like_func


#데이터 입력
INSERT INTO blog (blog_title, blog_writer, blog_date, blog_content) VALUES
	('첫번째글', '작성자1', NOW(), '내용1'),
	('두번째글', '작성자2', NOW(), '내용2'),
    ('세번째글', '작성자3', NOW(), '내용3'),
    ('다섯번째글', '작성자5', NOW(), '내용5'),
    ('여섯번째글', '작성자6', NOW(), '내용6'),
    ('일곱번째글', '작성자7', NOW(), '내용7'),
    ('여덟번째글', '작성자8', NOW(), '내용8'),
    ('아홉번째글', '작성자9', NOW(), '내용9'),
    ('열번째글', '작성자10', NOW(), '내용10');





SELECT * FROM blog;
SELECT * FROM gallery;


    