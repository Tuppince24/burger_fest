CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burger
(
    id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);