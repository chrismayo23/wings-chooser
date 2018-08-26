### Schema

CREATE DATABASE wing_db;
USE wing_db;

CREATE TABLE wings
(
	id int NOT NULL AUTO_INCREMENT,
	flavor varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
