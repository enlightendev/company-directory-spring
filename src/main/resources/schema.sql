DROP TABLE IF EXISTS applications;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS resource_accesses;
DROP TABLE IF EXISTS resources;

CREATE TABLE applications
(
  id int NOT NULL AUTO_INCREMENT,
  name varchar (255),
  app_type varchar(255),
  description varchar(255),
  technical_owner varchar(255),
  home_page varchar(255),
  ticket_url varchar(255),
  documentation_url varchar(255),
  business_owner varchar(255),
  created_at timestamp,
  updated_at timestamp,
  CONSTRAINT applications_pkey PRIMARY KEY (id )
);

CREATE TABLE employees
(
  id int NOT NULL AUTO_INCREMENT,
  fname varchar (255),
  lname varchar (255),
  manager_id int,
  is_manager boolean NOT NULL DEFAULT false,
  title varchar(255),
  department varchar(255),
  phone_cell varchar(255),
  phone_home varchar(255),
  phone_office varchar(255),
  email varchar(255),
  tags varchar(255),
  created_at timestamp,
  updated_at timestamp,
  CONSTRAINT employees_pkey PRIMARY KEY (id )
);

CREATE TABLE resources
(
  id int NOT NULL AUTO_INCREMENT,
  resource_type varchar(255),
  name varchar(255),
  description varchar(255),
  tags varchar(255),
  created_at timestamp,
  updated_at timestamp,

  customer_user_id_fkey int NULL,
  CONSTRAINT resources_pkey PRIMARY KEY (id )
-- CONSTRAINT foreignk FOREIGN KEY (customer_user_id_fkey) REFERENCES user_account (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE resource_accesses
(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  description varchar(255),
  created_at timestamp,
  updated_at timestamp,

  resource_id int NULL,
  CONSTRAINT resources_pkey PRIMARY KEY (id )
-- CONSTRAINT foreignk FOREIGN KEY (resource_id) REFERENCES user_account (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

ALTER TABLE resource_accesses ADD FOREIGN KEY (resource_id) REFERENCES resources(id);
