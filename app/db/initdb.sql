-- to create a new database
CREATE DATABASE FullCycleDB;

-- to use database
use FullCycleDB;

-- creating a new table
CREATE TABLE FullCycleDB (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(ID)
);

-- to show all tables
show tables;

-- to describe table
desc people;