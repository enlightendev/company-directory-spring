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


INSERT INTO employees
(fname, lname, manager_id, is_manager, title, department, phone_cell, phone_home, phone_office, email, tags, created_at, updated_at)
VALUES
  ('juan', 'lamadrid', 0, false, 'enterprise architect', 'IT', '2014016603', '9083933933', '9733013486', 'juan@mail.com', 'fmdb, java',CURRENT_TIMESTAMP, CURRENT_TIMESTAMP );