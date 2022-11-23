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

INSERT INTO usuarios (email, username, foto, password, nacimiento, DNI) 
VALUES 
("emitarascio@gmail.com","Emi","/images/fotoPerfil...","1234","2002-02-13",12345678),
("teremontana@gmail.com","Tere","/images/fotoPerfil...","hola123","2000-05-10",87654321),
("lucabello@gmail.com","Lu","/images/fotoPerfil...","lu54321","2000-06-26",13579864),
("etarascio@udesa.edu.ar","Emilia","/images/fotoPerfil...","Et42749593","2000-08-26",97531246),
("manu@cilfone.com","Manu","/images/fotoPerfil...","8888","1999-01-05",01010101);

INSERT INTO posteos (foto, texto, userId) 
VALUES 
("/images/fotoPosteo...","Pie de foto1",1),
("/images/fotoPosteo...","Pie de foto2",2),
("/images/fotoPosteo...","Pie de foto3",3),
("/images/fotoPosteo...","Pie de foto4",4),
("/images/fotoPosteo...","Pie de foto5",1),
("/images/fotoPosteo...","Pie de foto6",2),
("/images/fotoPosteo...","Pie de foto7",3),
("/images/fotoPosteo...","Pie de foto8",4),
("/images/fotoPosteo...","Pie de foto9",1),
("/images/fotoPosteo...","Pie de foto10",2);

INSERT INTO comentarios  (texto, userId, postId) 
VALUES 
("Comentario1",1,1),
("Comentario2",2,2),
("Comentario3",3,3), 
("Comentario4",3,4);







