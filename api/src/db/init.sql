ALTER USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY '123';
FLUSH PRIVILEGES;

create database if not exists blog;

use blog;

create table User (
  id  int not null auto_increment,
  username varchar(60) not null,
  email varchar(60) not null unique,
  password varchar(80) not null,
  primary key (id)
);
create table Post (
  id int not null auto_increment ,
  tittle varchar(60),
  content text,
  creationDate datetime,
  userId int not null,
  primary key (id),
  foreign key(userId) references User(id)
)