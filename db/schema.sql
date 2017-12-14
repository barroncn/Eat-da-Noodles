-- Create Database --

DROP DATABASE IF EXISTS pasta_db;

CREATE DATABASE pasta_db;

USE pasta_db;


-- Create Table --

CREATE TABLE pastaDishes(
    id MEDIUMINT AUTO_INCREMENT NOT NULL,
    pasta_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);