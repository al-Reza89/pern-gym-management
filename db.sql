
-- list database \l
-- create database: CREATE DATABASE database_name;
-- \c database_name  to connect database;
-- list all table \d

-- // database name gym



-- CREATE TABLE admin (
--     id BIGSERIAL NOT NULL PRIMARY KEY ,
--     admin_name VARCHAR(50) NOT NULL ,
--     admin_email VARCHAR(50) NOT NULL UNIQUE,
--     admin_password VARCHAR(50) NOT NULL 
    
-- );

-- INSERT INTO admin (admin_name,admin_email,admin_password) values ('Omar','omar77@email.com','123456');
-- DELETE from admin where admin_id=2;

-- CREATE TABLE admin_login(
--     admin_email VARCHAR(50) NOT NULL UNIQUE,
--     admin_password VARCHAR NOT NULL 
-- );



CREATE TABLE users (

    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL ,
    middle_name VARCHAR(50) ,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    joining_date DATE NOT NULL DEFAULT current_timestamp ,
    gender VARCHAR(30) NOT NULL,
    isadmin boolean DEFAULT false
    
);

INSERT INTO users (first_name,middle_name,last_name,email,gender,password) values ('Ali','Al','Reza','reza89@gmail.com','male','1234567');




CREATE TABLE  packages (
   id  BIGSERIAL NOT NULL PRIMARY KEY,
   package  varchar(200) NOT NULL,
   descriptions  Text NOT NULL,
   amount  float NOT NULL,
   member_id BIGINT REFERENCES users(id)

) ;


INSERT INTO packages ( package, descriptions, amount,member_id) VALUES( 'Sample Package', 'Program sample  + trainer',1000,1 );

CREATE TABLE  payments  (
   id  BIGSERIAL NOT NULL PRIMARY KEY,
   amount  BIGINT NOT NULL,
   remarks  text NOT NULL,
   payment_type varchar NOT NULL,
   date_created  DATE NOT NULL  DEFAULT current_timestamp,
    member_id BIGINT REFERENCES users(id)
);

INSERT INTO payments (  amount, remarks, payment_type,member_id) VALUES( 4500, 'First payment', 'registration', 1);






CREATE TABLE instructors (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    instructor_name VARCHAR(50) NOT NULL ,
    instructor_email VARCHAR(50) NOT NULL UNIQUE,
    instructor_address VARCHAR ,
    member_id BIGINT REFERENCES users(id)
);

INSERT INTO instructors (instructor_name,instructor_email,instructor_address,member_id) values ('noname','noname@email.com','sylhet',1);



CREATE TABLE workoutPlan (
     id BIGSERIAL NOT NULL PRIMARY KEY,
     member_id BIGINT not NULL REFERENCES users(id),
     instructor_id BIGINT NOT NULL REFERENCES instructors(id),
    workout_time VARCHAR NOT NULL ,
    details text
);

INSERT INTO workoutPlan (member_id,instructor_id,workout_time) values(1,1,'2 hours');


CREATE TABLE users_info (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  member_id BIGINT NOT NULL REFERENCES users(id),
  package_id BIGINT REFERENCES   packages(id),
  start_date date NOT NULL DEFAULT current_timestamp,
  end_date date NOT NULL DEFAULT current_timestamp,
  instructor_id BIGINT NOT NULL REFERENCES instructors(id),
  status varchar(50) NOT NULL DEFAULT 'active',
  date_created date NOT NULL DEFAULT current_timestamp
);


INSERT INTO users_info ( member_id, package_id, instructor_id, status) VALUES( 1, 1,1,  'inactive');
