INSERT INTO applications
(name, app_type, description, technical_owner, home_page, ticket_url, documentation_url, business_owner, created_at, updated_at)
VALUES
  ('solar', 'desktop', 'policy admin system', 'joe@mail.com', 'www.no-home.com', 'http://jira', 'http://wiki', 'elizabeth@philafin.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP );

INSERT INTO applications
(name, app_type, description, technical_owner, home_page, ticket_url, documentation_url, business_owner, created_at, updated_at)
VALUES
  ('fmdb', 'web', 'fund mgmt system', 'joe@mail.com', 'www.fmdb.com', 'http://jira', 'http://wiki', 'kim@philafin.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP );

INSERT INTO applications
(name, app_type, description, technical_owner, home_page, ticket_url, documentation_url, business_owner, created_at, updated_at)
VALUES
  ('reportal', 'web', 'reports to clients', 'derryl@mail.com', 'reportal.com', 'http://jira', 'http://wiki', 'skip@philafin.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP );



-- IT Managers

INSERT INTO employees
(fname, lname, manager_id, is_manager, title, department, phone_cell, phone_home, phone_office, email, tags, created_at, updated_at)
VALUES
  ('Kim', 'Jacques', 0, true, 'CIO', 'IT', '222-111-3333', '111-222-3333', '433-343-3434', 'kj@mail.com', 'CIO', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP );

INSERT INTO employees
(fname, lname, manager_id, is_manager, title, department, phone_cell, phone_home, phone_office, email, tags, created_at, updated_at)
VALUES
  ('Gary', 'Francis', 0, true, 'apl manager', 'IT', '222-111-3333', '111-222-3333', '433-343-3434', 'gf@mail.com', 'apl, solar',CURRENT_TIMESTAMP, CURRENT_TIMESTAMP );


-- IT Direct Reports
INSERT INTO employees
(fname, lname, manager_id, is_manager, title, department, phone_cell, phone_home, phone_office, email, tags, created_at, updated_at)
VALUES (
    'Juan', 'Lamadrid',
    (select m.id from employees m where m.lname = 'Jacques'),
    false, 'enterprise architect', 'IT', '201-401-6603', '908-393-3933', '973-301-3486', 'juan@mail.com', 'fmdb, java',CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
);

INSERT INTO employees
(fname, lname, manager_id, is_manager, title, department, phone_cell, phone_home, phone_office, email, tags, created_at, updated_at)
VALUES (
  'Derryl', 'Varghese',
  (select m.id from employees m where m.lname = 'Francis'),
  false, 'java developer', 'IT', '444-333-2222', '222-333-4444', '121-232-3434', 'dv@mail.com', 'fmdb, reportal',CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
);
