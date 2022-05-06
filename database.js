CREATE DATABSAE todos_authenticate;

CREATE TABLE users(
    user_id uuid DEFAULT 
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null
);

INSERT INTO users (user_name,user_email,user_password) VALUES ('Neel','neel6644@gmail.com','Neel');

CREATE TABLE todos(
    todo_id serial primary key,
    user_id uuid referaces users(user_id),
    description varchar not null
);
