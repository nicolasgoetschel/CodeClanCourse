DROP TABLE lightsabers;
DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    is_darkside BOOLEAN,
    age INT
);

CREATE TABLE lightsabers (
    id SERIAL PRIMARY KEY, 
    hilt_metal VARCHAR(255) NOT NULL,
    colour VARCHAR(255) NOT NULL,
    character_id INT REFERENCES characters(id)
);

INSERT INTO characters (name, is_darkside,age) 
VALUES ('Obi-Wan Kenobi', false, 27);

INSERT INTO characters (name, is_darkside, age)
VALUES ('Anakin Skywalker', false, 19);

INSERT INTO characters (name, is_darkside, age)
VALUES ('Darth Maul', true, 32);

INSERT INTO characters (name, is_darkside)
VALUES ('Yoda', false);

INSERT INTO characters (name, is_darkside, age)
VALUES ('Luke Skywalker', false, 17);

INSERT INTO characters (name, is_darkside, age)
VALUES ('Stormtrooper', true, 25);

INSERT INTO characters (name, is_darkside, age)
VALUES ('Stormtrooper', true, 25);

INSERT INTO characters (name, is_darkside, age)
VALUES ('Stormtrooper', true, 25);

INSERT INTO characters (name, is_darkside, age)
VALUES ('Stormtrooper', true, 25);

SELECT COUNT(age) FROM characters
WHERE (is_darkside = false);

-- UPDATE characters SET is_darkside =true
-- WHERE name = 'Anakin Skywalker';

UPDATE characters SET (is_darkside, age) = (true, 20)
WHERE name = 'Anakin Skywalker';

UPDATE characters SET age = 65
WHERE name = 'Obi-Wan Kenobi';

UPDATE characters SET age = 26
WHERE id = 6;

DELETE FROM characters
WHERE name = 'Darth Maul';


INSERT INTO lightsabers (colour, hilt_metal, character_id)
VALUES('Green', 'Palladium', 4);

INSERT INTO lightsabers (hilt_metal, colour, character_id)
VALUES('Gold' 'Red', 2);


SELECT * FROM characters;
SELECT * FROM lightsabers;