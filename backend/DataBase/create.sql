CREATE DATABASE IF NOT EXISTS delilahresto;

USE delilahresto;

CREATE TABLE users (
  usersId int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  address varchar(100) UNIQUE DEFAULT NULL,
  age int(2) DEFAULT NULL,
  phone varchar(10) DEFAULT NULL,
  username varchar(10) NOT NULL,
  password varchar(20) NOT NULL,
  role varchar(7) DEFAULT NULL,
  PRIMARY KEY (usersId)
);

CREATE TABLE AuthToken (
  tokenId int NOT NULL AUTO_INCREMENT,
  username varchar(10) NOT NULL,
  token varchar(200) DEFAULT NULL,
  PRIMARY KEY (tokenId)
);

CREATE TABLE products (
  productsId int AUTO_INCREMENT,
  title varchar(50) UNIQUE NOT NULL,
  price double precision NOT NULL,
  description varchar(45) UNIQUE NOT NULL,
  PRIMARY KEY (productsId)
);

CREATE TABLE orders (
ordersID int NOT NULL AUTO_INCREMENT,
userOrder int NOT NULL,
productOrder int NOT NULL,
quantity int NOT NULL,
orderNum int NOT NULL,
PRIMARY KEY (ordersID),
FOREIGN KEY (userOrder) REFERENCES users (usersId) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (productOrder) REFERENCES products (productsId) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE orderUser (
orderUserID int NOT NULL AUTO_INCREMENT,
userID int NOT NULL,
orderNum int NOT NULL,
status varchar(20) NOT NULL,
PRIMARY KEY (orderUserID),
FOREIGN KEY (userID) REFERENCES users (usersId) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO users
VALUES
(NULL,'Leonardo Nieva','Juan B. Justo 3250 1° A',53,54911547893,'lnieva','acamica2020','member'),
(NULL,'admin','Humboldt 1967',36,5491158632,'admin','soyadmin','admin');

INSERT INTO products
VALUES
(NULL,'Pizza de muzzarella',700,'Pizza de tomate con muzzarella y aceitunas'),
(NULL,'Pizza de muzzarella con jamon',800,'Pizza de tomate con muzzarella y jamon'),
(NULL,'Empanada de carne',50,'Empanada de carne cortada a cuchillo'),
(NULL,'Empanada de carne picante',50,'Empanada de carne picante'),
(NULL,'Empanada de jamon y queso',50,'Empanada de jamon y queso'),
(NULL,'Asado x 2',1200,'Asado para dos personas'),
(NULL,'Asado x 4',2200,'Asado para cuatro personas'),
(NULL,'Pollo a la parrilla',900,'Pollo a la parrilla con limon'),
(NULL,'Helado de chocolate',200,'Tres bochas de helado'),
(NULL,'Helado de vainilla',200,'Tres bochas de vainilla');