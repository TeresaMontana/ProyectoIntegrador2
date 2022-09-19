CREATE SCHEMA redSocial;

USE redSocial;


CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    email VARCHAR(255) NOT NULL UNIQUE, 
    username VARCHAR(255) NOT NULL UNIQUE, 
    foto VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, 
    nacimiento DATE NOT NULL, 
    DNI INT(8) NOT NULL, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE posteos (
	id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    foto VARCHAR(255) NOT NULL,
    texto VARCHAR(255) NOT NULL,
    userId INT UNSIGNED, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    
    FOREIGN KEY (userId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    texto VARCHAR(255) NOT NULL,
    userId INT UNSIGNED, 
    postId INT UNSIGNED, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    

    FOREIGN KEY (userId) REFERENCES usuarios(id),
    FOREIGN KEY (postId) REFERENCES posteos(id)
);


INSERT INTO usuarios (email, username, foto, password, nacimiento, DNI) 
VALUES 
("emitarascio@gmail.com","Emi","/images/fotoPerfil...","1234","2002-02-13",43847158),
("teremontana@gmail.com","Tere","/images/fotoPerfil...","hola123","2000-05-10",42827331),
("lucabello@gmail.com","Lu","/images/fotoPerfil...","lu54321","2000-06-26",42749592),
("etarascio@udesa.edu.ar","Emilia","/images/fotoPerfil...","Et42749593","2000-08-26",42749593),
("manu@cilfone.com","Manu","/images/fotoPerfil...","8888","1999-01-05",42000000);

INSERT INTO posteos (foto, texto, FkUserId) 
VALUES 
("/images/fotoPosteo...","Pie de foto1",43847158),
("/images/fotoPosteo...","Pie de foto2",42827331),
("/images/fotoPosteo...","Pie de foto3",42749592),
("/images/fotoPosteo...","Pie de foto4",42749593),
("/images/fotoPosteo...","Pie de foto5",42000000),
("/images/fotoPosteo...","Pie de foto6",43847158),
("/images/fotoPosteo...","Pie de foto7",42827331),
("/images/fotoPosteo...","Pie de foto8",42749592),
("/images/fotoPosteo...","Pie de foto9",42749593),
("/images/fotoPosteo...","Pie de foto10",42000000);

INSERT INTO comentarios  (texto, FkUserbId, FkPostId) 
VALUES 
("Comentario1",43847158,1),
("Comentario2",42827331,2),
("Comentario3",42749592,3), 
("Comentario4",42749593,4);







