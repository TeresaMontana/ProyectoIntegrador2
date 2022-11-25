DROP DATABASE IF EXISTS `The_Jewelry_Galery`;
CREATE DATABASE `The_Jewelry_Galery`;

USE `The_Jewelry_Galery`;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(45) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    nacimiento DATETIME NOT NULL,
    DNI INT(8) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE posteos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    foto VARCHAR(255) NOT NULL,
    texto VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    userId INT,
    FOREIGN KEY (userId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    userId INT,
    FOREIGN KEY (userId) REFERENCES usuarios(id),
    postId INT,
    FOREIGN KEY (postId) REFERENCES posteos(id)
);


INSERT INTO usuarios VALUES 
('1', 'emilia@gmail.com', 'Emilia', 'FotodePerfil-1669333508738.jpeg', '$2a$10$eaMG6j07jKwCnRfEODSCcePk4nXjApwQ//.SIY7Iz1PDrhae6/6.K', '1991-06-12 00:00:00', '12345678', '2022-11-24 20:45:08', '2022-11-24 20:45:08'),
('2', 'lucila@gmail.com', 'Lucila', 'FotodePerfil-1669333561384.jpeg', '$2a$10$bWePqP8ClZ8D0r0zmkaRtOtprXGP9OYYwI5g3VeUfyzz0YL6bNQAC', '2001-07-03 00:00:00', '12345677', '2022-11-24 20:46:01', '2022-11-24 20:46:01'),
('3', 'teresa@gmail.com', 'Teresa', 'FotodePerfil-1669333589988.jpeg', '$2a$10$GJ7C4bMlH53RUk0ehT3U0eEnSpypJwa4GhFBs5aTTyVuu.PN4qc8u', '1986-06-14 00:00:00', '12312312', '2022-11-24 20:46:30', '2022-11-24 20:46:30'),
('4', 'admin@admin.com', 'admin', 'FotodePerfil-1669333631927.jpeg', '$2a$10$JQ6D91u0Cwi/r1wQ9u/EoedtVjmWWFedXzDHur7YQ5mc.2GS./KyG', '2022-11-24 00:00:00', '11111111', '2022-11-24 20:47:12', '2022-11-24 20:47:12');


INSERT INTO posteos VALUES 
('1','Posteos-1669333670047.jpeg','Mi primer post','2022-11-24 20:47:50','2022-11-24 20:47:50','1'),
('2','Posteos-1669333693493.jpeg','No sé cualquier cosa','2022-11-24 20:48:13','2022-11-24 20:48:13','1'),
('3','Posteos-1669333741110.jpeg','Este es un post','2022-11-24 20:49:01','2022-11-24 20:49:01','2'),
('4','Posteos-1669333773992.jpeg','Mi primer post también','2022-11-24 20:49:33','2022-11-24 20:49:33','3'),
('5','Posteos-1669333786360.jpeg','Última prueba','2022-11-24 20:49:46','2022-11-24 20:49:46','3');


INSERT INTO comentarios (texto, userId, postId) VALUES 
("mi primer comentario",'1','3'),
("mi primer comentario",'2','1'),
("mi segundo comentario",'2','2'),
("mi primer comentario",'3','1'),
("mi segundo comentario",'3','1'),
("último comentario de prueba",'1','5');
