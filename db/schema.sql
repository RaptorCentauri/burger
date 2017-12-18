create database burgers_db;
use burgers_db;
create table burgers(
  id INT AUTO_INCREMENT primary key NOT NULL,
  burger_name VARCHAR(128),
  devoured TINYINT NULL DEFAULT 0,
  date TIMESTAMP
);
