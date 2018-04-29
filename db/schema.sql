### Schema

CREATE DATABASE burgers_db;
USE cat_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burer_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
