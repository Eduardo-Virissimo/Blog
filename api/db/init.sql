create database if not exists blog;

create table if not exists User (
  id  int not null,
  username varchar(60) not null,
  email varchar(60) not null,
  password varchar(80) not null,
  primary key (id)
);
create table if not exists Post (
  id int not null auto_increment ,
  tittle varchar(60),
  content text,
  creationDate datetime,
  userId int not null,
  primary key (id),
  foreign key(userId) references User(id)
)