-- Active: 1673194837231@@127.0.0.1@3306
CREATE TABLE sensor(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    measurement TEXT,
    date_created datetime default current_timestamp
);