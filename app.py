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


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=True)
    with app.app_context():
        API.close_db()
