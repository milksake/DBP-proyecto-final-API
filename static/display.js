const container = document.getElementById("product-container");
const css = document.getElementById('css-link');

function createProducts(products) {
    css.href = "/static/style.css"
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
   
        //inner
        let img = document.createElement('img');
        img.src = "/static/".concat(product['img']);
        img.height = 230;
        img.width = 230;
        let a = document.createElement('a');
        a.dataset.page = "product/".concat(product['product_id']);
        a.textContent = product['name'];
        a.className = 'nav-link';
        let h2 = document.createElement('h2');
        h2.appendChild(a);
        let h3 = document.createElement('h3');
        h3.textContent = "S/.".concat(product['price']);
        //div
        let div = document.createElement('div');
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(h3);
        container.appendChild(div);
    }
}

function createOneProduct(products) {
    css.href = "/static/product.css"
    const product = products[0];
    
    //inner
    let h1 = document.createElement('h1');
    h1.textContent = product['name'];
    let img = document.createElement('img');
    img.src = "/static/".concat(product['img']);
    img.height = 600;
    img.width = 600;
    img.style.border = "3px solid";
    img.style.color = "rgb(38, 11, 3)";
    let h2 = document.createElement('h2');
    h2.textContent = "S/.".concat(product['price']);
    let h3_1 = document.createElement('h3');
    h3_1.textContent = product['stars'].toString().concat(" ", "&#11088");
    let a = document.createElement('a');
    a.dataset.page = "user/".concat(product['user']);
    a.textContent = product['username'];
    a.className = "nav-link style-a";
    let h3_2 = document.createElement('h3');
    h3_2.textContent = "Submitted by: ";
    h3_2.appendChild(a);
    let p = document.createElement('p');
    p.textContent = product['description'];
    let button = document.createElement('button');
    button.innerHTML = "ADD TO CART &#128722";
    button.onclick = () => {
        add_to_cart(product['product_id']);
    };
    //div
    let container1 = document.createElement('div');
    container1.className = "container1";
    container1.appendChild(h1);
    container1.appendChild(img);
    container1.appendChild(h2);
    container1.appendChild(h3_1);
    container1.appendChild(h3_2);
    container1.appendChild(p);
    container1.appendChild(button);
    container.appendChild(container1);
}

function createOneUser(users) {
    css.href = "/static/user.css"
    const user = users[0];

    let h1 = document.createElement('h1');
    h1.textContent = "Datos Personales";
    let p_1 = document.createElement('p');
    p_1.textContent = "User: ".concat(user['username']);
    let p_2 = document.createElement('p');
    p_2.textContent = "Email: ".concat(user['email']);
    let h2 = document.createElement('h2');
    h2.textContent = "Products added by ".concat(user['username']);

    container.appendChild(h1);
    container.appendChild(p_1);
    container.appendChild(p_2);
    container.appendChild(h2);

    for (let i = 0; i < user['products'].length; i++) {
        const product = user['products'][i];
        let div_img = document.createElement('img');
        div_img.style.border = "10px solid";
        div_img.style.color = "rgba(38, 11, 3, 0.641";
        div_img.src = "/static/".concat(product['img']);
        div_img.height = 400;
        div_img.width = 400;
        let div_a = document.createElement('a');
        div_a.dataset.page = "product/".concat(product['product_id']);
        div_a.textContent = product['name'];
        let div_h2 = document.createElement('h2');
        div_h2.appendChild(div_a);
        let div_h3 = document.createElement('h3');
        div_h3.textContent = "S/.".concat(product['price']);
        let div = document.createElement('div');
        div.className = "container1";
        div.appendChild(div_img);
        div.appendChild(div_h2);
        div.appendChild(div_h3);
        container.appendChild(div);
    }
    
}

function createFormLogin() {
    css.href = "/static/login.css"
    //TO DO
    let p = document.createElement('p');
    p.textContent = "aqui va el login";
    container.appendChild(p);
}

function createFormRegister() {
    css.href = "/static/login.css"
    //TO DO
    let p = document.createElement('p');
    p.textContent = "aqui va el register";
    container.appendChild(p);
}

function createCart(products) {
    css.href = "/static/cart.css"
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        //TO DO
        //Karol guiate del antiguo cart
        
    }
    //Borrar lo sgte
    let p = document.createElement('p');
    p.textContent = "aqui va el carrito";
    container.appendChild(p);
}

function displayJSON(json) {
    let displayData = JSON.parse(json);
    while (container.childElementCount > 0)
        container.removeChild(container.lastChild);
    if (displayData['type'] == 'all products')
        createProducts(displayData['data']);
    else if (displayData['type'] == 'one product')
        createOneProduct(displayData['data']);
    else if (displayData['type'] == 'one user')
        createOneUser(displayData['data']);
    else if (displayData['type'] == 'login')
        createFormLogin();
    else if (displayData['type'] == 'register')
        createFormRegister();
    else if (displayData['type'] == 'cart')
        createCart(displayData['data']);
    load_links();
}
