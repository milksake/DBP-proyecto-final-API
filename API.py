import sqlite3
from flask import g, current_app, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash


def get_db():
    if "db" not in g:
        g.db = sqlite3.connect(
            current_app.config["DATABASE"],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row
    return g.db


def close_db():
    db = g.pop("db", None)

    if db is not None:
        db.close()


def getLoggedUser():
    if 'username' in session:
        return {'username': session['username'], 'user_id': session['user_id']}
    else:
        return {'username': "None"}



def get_users():
    db = get_db()
    cursor = db.cursor()

    statement = "SELECT * FROM users"
    rows = cursor.execute(statement).fetchall()

    db.commit()

    return jsonify({"type": "all users",
                    "data": [dict(user) for user in rows], "user": getLoggedUser()})


def get_user(key, value):
    db = get_db()
    cursor = db.cursor()

    statement = "SELECT * FROM users WHERE " + key + "=" + str(value)
    rows = cursor.execute(statement).fetchall()

    listUser = [dict(user) for user in rows]

    userID = listUser[0]['user_id'];

    statement2 = "SELECT * FROM products WHERE user=" + str(userID)
    rows2 = cursor.execute(statement2).fetchall()

    listProducts = [dict(product) for product in rows2]

    listUser[0]['products'] = listProducts

    db.commit()

    return jsonify({"type": "one user", "data": listUser, "user": getLoggedUser()})


def checkIfUserExists(username, password):
    db = get_db()
    cursor = db.cursor()

    statement = "SELECT * FROM users WHERE username='" + username + "'"
    rows = cursor.execute(statement).fetchall()

    db.commit()

    user_list = [dict(product) for product in rows]

    if len(user_list):
        if (check_password_hash(user_list[0]['password'], password)):
            return user_list[0]['user_id']
    return 0

def new_user(name, email, password, cart_id = 0):
    db = get_db()
    cursor = db.cursor()
    statement = "INSERT INTO users(username, email, password, cart_id) VALUES ( ?, ?, ?, ?)"
    cursor.execute(statement, [name, email, generate_password_hash(password), cart_id])
    db.commit()
    return True

def checkUsernameExists(username):
    db = get_db()
    cursor = db.cursor()

    statement = "SELECT * FROM users WHERE username='" + username + "'"
    cursor.execute(statement)
    result = cursor.fetchone()

    if not result:
        return 1
    return 0

def checkEmailExists(email):
    db = get_db()
    cursor = db.cursor()

    statement = "SELECT * FROM users WHERE username='" + email + "'"
    cursor.execute(statement)
    result = cursor.fetchone()

    if not result:
        return 1
    return 0

def get_products():
    db = get_db()
    cursor = db.cursor()

    statement = "SELECT * FROM products"
    rows = cursor.execute(statement).fetchall()

    db.commit()

    return jsonify(
        {"type": "all products", "data": [dict(product) for product in rows], "user": getLoggedUser()}
    )

def new_product(name, stars, price, img, description, tags, user):
    db = get_db()
    cursor = db.cursor()
    stars = 0
    statement = "INSERT INTO products (name, stars, price, img, description, tags, user) VALUES(?,?,?,?,?,?,?)"
    cursor.execute(statement, [name, stars, price, img, description, tags, 1]) 

    db.commit()
    return True

def get_product(key, value):
    db = get_db()
    cursor = db.cursor()

    statement = "SELECT a.*, b.username FROM products AS a LEFT JOIN users as b ON a.user = b.user_id WHERE " + key + "=" + str(value)
    rows = cursor.execute(statement).fetchall()

    db.commit()

    return jsonify({"type": "one product",
                    "data": [dict(product) for product in rows], "user": getLoggedUser()})

def get_cart_products():
    db = get_db()
    cursor = db.cursor()

    statement = "SELECT * FROM products"
    rows = cursor.execute(statement).fetchall()

    db.commit()

    return jsonify(
        {"type": "cart", "data": [dict(product) for product in rows], "user": getLoggedUser()}
    )

def get_products_by_tag(tag):
    db = get_db()
    cursor = db.cursor()

    statement = "SELECT * FROM products WHERE tags like '%" + tag + "%'"
    rows = cursor.execute(statement).fetchall()

    db.commit()

    return jsonify(
        {"type": "all products", "data": [dict(product) for product in rows], "user": getLoggedUser()}
    )

def get_products_by_search(search):
    db = get_db()
    cursor = db.cursor()

    statement = "SELECT * FROM products WHERE name like '%" + search + "%'"
    rows = cursor.execute(statement).fetchall()

    db.commit()

    return jsonify(
        {"type": "all products", "data": [dict(product) for product in rows], "user": getLoggedUser()}
    )
