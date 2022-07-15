DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS users(
user_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
username TEXT UNIQUE NOT NULL,
email TEXT UNIQUE NOT NULL,
password TEXT NOT NULL,
cart_id INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS products(
product_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
stars INTEGER,
price INTEGER NOT NULL,
img TEXT,
description TEXT,
tags TEXT,
user INTEGER
);

CREATE TABLE IF NOT EXISTS titi(
titi_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
user_id INTEGER NOT NULL,
product_id INTEGER NOT NULL
);

INSERT INTO titi (user_id, product_id) VALUES (1, 1), (1, 5), (1,8);

INSERT INTO users (username, email, password, cart_id)
VALUES
("admin", "example@mail.com", "pbkdf2:sha256:260000$YttdLqNomnoIvoqf$87a43d1e91b2c5dcf59ec00c13c11e78d93d8e90838d7ef9c310e643b2657a84", 1);

INSERT INTO products (name, stars, price, img, description, tags, user)
VALUES
(
    "Cubo de Rubik Lanlan Dodecaedro Rómbico",
    5,
    80,
    "imagenes/cubo1.jpeg",
    "Es una modificacion del Cubo de Rubik 4x4, a pesar de tener 12 caras tiene exactamente el mismo número de piezas que el cubo 4x4. ",
    "4x4",
    1
),
(
    "Cubo Dayan Tangram",
    5,
    60,
    "imagenes/cubo2.jpeg",
    "Es una modificación del Cubo de Rubik. Marca: Dayan. Versión: Tangram",
    "[]",
    1
),
(
    "Cubo DaYan Bagua",
    5,
    90,
    "imagenes/cubo3.jpeg",
    "Es una modificacion compleja del Cubo de Rubik 3x3. La pieza central de cada cara dividida en 5 piezas a ordenar. Marca: Dayan. Versión: Bagua ",
    "3x3",
    1
),
(
    "Cubo de Rubik Icosaedro",
    5,
    100,
    "imagenes/cubo4.jpeg",
    "Su giro es en torno a las caras por lo que cuenta con 20 ejes de giro, se puede mezclar con jumbling para que se deforme o sin jumbling. Modelo: Lanlanicosromb",
    "5x5 +",
    1
),
(
    "Cubo de Rubik Pyramorphix ",
    5,
    100,
    "imagenes/cubo5.jpeg",
    "Es una modificación del 2x2. Esta es la versión piramidal con lineas rectas.",
    "2x2 Pyramix",
    1
),
(
    "Timur Gear Skewb",
    5,
    100,
    "imagenes/cubo6.jpeg",
    "El Timur Gear Skewb es un Skewb con engranajes, diseñado por Timur Evbatyrov y producido por Calvins.",
    "Gear cubes 2x2",
    1
),
(
    "Cubo de Rubik Dayan Wheels of Wisdom",
    5,
    120,
    "imagenes/cubo7.jpeg",
    "Dayan Wheels of Wisdom es un Cubo de 3x3 completamente modificado.",
    "3x3",
    1
),
(
    "Cubo de Rubik 3x3",
    5,
    70,
    "imagenes/cubo8.jpeg",
    "Tradicional cubo de 3x3.",
    "3x3",
    1
),
(
    "YJ Floppy Ghost Cuboide 3x3x1",
    5,
    90,
    "imagenes/cubo9.jpeg",
    "YJ Floppy Ghost Cuboide 3x3x1 es una versión adaptada de los cortes de un Cubo Chost 3x3, haciendo que tenga un aforma particulas.",
    "Mirror cubes",
    1
),
(
    "Quiyi Cubo Mágico Mirror 2x2",
    5,
    90,
    "imagenes/cubo10.jpeg",
    "Es la variacion del clásico cubo Rubik 2x2, base negra con stickers color plata.",
    "2x2 Mirror cubes",
    1
),
(
    "Serpiente Twist Sheng Shou",
    5,
    70,
    "imagenes/cubo11.jpeg",
    "Serpiente de ShengShou Twist Snake blanca. Muchas soluciones y ninguna incorrecta.",
    "[]",
    1
),
(
    "Cubo Mirror Moyu Meilong",
    5,
    70,
    "imagenes/cubo12.jpeg",
    "Moyu Meilong 3x3x3 Plateado. Modelo 1761",
    "3x3 Mirror cubes",
    1
),
(
    "Cubo de Rubik 3x3",
    5,
    150,
    "imagenes/cubo13.jpeg",
    "El clasico cubo de Rubik 3x3 en un color particular.",
    "3x3",
    1
)
;