from flask import Flask, render_template
import API

app = Flask(__name__)

app.config["DATABASE"] = "data.db"


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


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=True)
    with app.app_context():
        API.close_db()
