USE nodedb;
CREATE TABLE people (
    id integer NOT NULL auto_increment PRIMARY KEY,
    name varchar(255) NOT NULL
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;