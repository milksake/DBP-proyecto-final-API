from flask import Flask, redirect, render_template, request, session, url_for
import API

app = Flask(__name__)

app.config["DATABASE"] = "data.db"
app.config["SECRET_KEY"] = "GRUPO8PLATAFORMAS"


@app.route('/')
def index():
    return render_template('index.html')

# API functions


@app.route('/get-all-users')
def get_all_users():
    with app.app_context():
        u = API.get_users()
    return u


@app.route('/user/<int:id>')
def get_users(id):
    with app.app_context():
        u = API.get_user('user_id', id)
    return u


@app.route('/products')
def get_all_products():
    with app.app_context():
        p = API.get_products()
    return p


@app.route('/product/<int:num>')
def get_product(num):
    with app.app_context():
        p = API.get_product('product_id', num)
    return p


# Work in progress
@app.route('/cart')
def get_cart_products():
    with app.app_context():
        p = API.get_cart_products()
    return p


@app.route('/add-product-to-cart/<int:id>', methods=['POST'])
def add_product_to_cart(id):
    return "True"


@app.route('/tag/<tag>')
def get_product_tag(tag):
    with app.app_context():
        p = API.get_products_by_tag(tag);
    return p

@app.route('/search/<search>')
def get_product_search(search):
    with app.app_context():
        p = API.get_products_by_search(search);
    return p


@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    id = API.checkIfUserExists(username, password)
    if id:
        setLoginSession(username, id)
        return username
    else:
        return "False"

@app.route('/logout')
def logout():
    a = checkIfLoggedIn()
    if a != "None":
        destroyLoginSession()
    return get_all_products()

def checkIfLoggedIn():
    if 'username' in session:
        return session['username'] + " - " + str(session['user_id'])
    return "None"

def setLoginSession(user, id):   
    session['username'] = user
    session['user_id'] = id

def destroyLoginSession():
    session.pop('username', None)
    session.pop('id', None)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=True)
    with app.app_context():
        API.close_db()
