CREATE DATABASE ng_Rivera_Designs_db;

USE ng_Rivera_Designs_db;

CREATE TABLE muebles(
    idmuebles INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    coleccion  VARCHAR(180),
    tipo VARCHAR(180),
    descripcion VARCHAR(400),
    medidas VARCHAR(180),
    croquis VARCHAR(180),
    imgUrl1 VARCHAR(200),
    imgUrl2 VARCHAR(200),
    imgUrl3 VARCHAR(200),
    imgUrl4 VARCHAR(200),
    imgUrl5 VARCHAR(200)
);

DESCRIBE muebles;