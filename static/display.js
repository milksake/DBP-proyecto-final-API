const container = document.getElementById("product-container");
const css = document.getElementById('css-link');
const a_logout = document.getElementById("a-logout");
const a_register = document.getElementById("a-register");
const a_login = document.getElementById("a-login");
const a_user = document.getElementById("a-user");
const a_add_product = document.getElementById("a-add-product");
const a_cart = document.getElementById("a-cart");

function createLoginChanges(user) {
    if (user['username'] == "None")
    {
        a_logout.style.display = "none";
        a_register.style.display = "block";
        a_login.style.display = "block";
        a_user.style.display = "none";
        a_add_product.style.display = "none";
        a_cart.style.display = "none";
    }
    else
    {
        a_logout.style.display = "block";
        a_register.style.display = "none";
        a_login.style.display = "none";
        a_user.textContent = user['username'];
        a_user.dataset.page = "user/".concat(user['user_id']);
        a_user.style.display = "block";
        a_add_product.style.display = "block";
        a_cart.style.display = "block";
    }
}

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

    let mybr_1 = document.createElement('br');

    //div page
    let page_1 = document.createElement('div');
    page_1.className = "page";

    //div form
    let form_1 = document.createElement('div');
    form_1.className = "form";

    let h1_1 = document.createElement('h1');
    h1_1.textContent = "Login form";

    let form_2 = document.createElement('form');
    form_2.action="";
    form_2.method="POST";

    let div_1 = document.createElement('div');
    div_1.className = "input-box";

    let label_1 = document.createElement('label');
    label_1.textContent = "Username";
    
    let input_1 = document.createElement('input');
    input_1.type = "text";
    input_1.name = "username";
    input_1.autocomplete = "off";
    input_1.setAttribute = ('required', '');

    //armar div1
    div_1.appendChild(label_1);
    div_1.appendChild(mybr_1);
    div_1.appendChild(input_1);


    //div2
    let div_2 = document.createElement('div');
    div_2.className = "input-box";
    let mybr_2 = document.createElement('br');

    let label_2 = document.createElement('label');
    label_2.textContent = "Password";

    let input_2 = document.createElement('input');
    input_2.type = "password";
    input_2.name = "password";
    input_2.autocomplete = "off";
    input_2.setAttribute = ('required', '');

    //armar div2
    div_2.appendChild(label_2);
    div_2.appendChild(mybr_2);
    div_2.appendChild(input_2);

    let p_1 = document.createElement('p');
    p_1.className = "forgetPass"
    let a_1 = document.createElement('a');
    a_1.href = "po.ta.to";
    a_1,textContent = "Forgot password?";

    p_1.appendChild(a_1);

    let button_1 = document.createElement('button');
    button_1.className = "btn";
    button_1.type = "submit";
    button_1.textContent = "Login";

    form_1.appendChild(h1_1);
    form_2.appendChild(div_1);
    form_2.appendChild(div_2);
    form_2.appendChild(p_1);
    form_2.appendChild(button_1);
    form_1.appendChild(form_2);

    page_1.appendChild(form_1);

    container.appendChild(page_1);
}

function createFormRegister() {
    css.href = "/static/login.css"

    const br = document.createElement('br');

    let div_1 = document.createElement('div');
    div_1.className = "form"; //Dubidubiduba
    let h1_1 = document.createElement('h1');
    h1_1.textContent = "Register Form";

    // form
    let form_1 = document.createElement('form');
    form_1.id = "form";
    form_1.method = "POST";
    form_1.action = "";

    //div2
    let div_2 = document.createElement('div');
    div_2.className = "input-box";
    div_2.id = "username-input";
    let label_1 = document.createElement('label');
    label_1.textContent = "Username";
    let input_1 = document.createElement('input');
    input_1.type = "text";
    input_1.name = "username";
    input_1.autocomplete = "off";
    input_1.setAttribute = ('required', '');
    let p_1 = document.createElement('p');
    p_1.className = "form__input-error";
    p_1.textContent = "4 to 16 digits, numbers, letters and underscore.";
    let mybr_1 = document.createElement('br');
    
    //armar div2
    div_2.appendChild(label_1);
    div_2.appendChild(mybr_1)
    div_2.appendChild(input_1);
    div_2.appendChild(p_1);

    //div3
    let div_3 = document.createElement('div');
    div_3.className = "input-box";
    div_3.id = "email-input"

    let label_3 = document.createElement('label');
    label_3.textContent = "Email";

    let input_3 = document.createElement('input');
    input_3.type = "email";
    input_3.name = "email";
    input_3.autocomplete = "off";
    input_3.setAttribute = ('required', '');

    let p_3 = document.createElement('p');
    p_3.className = "form__input-error";
    p_3.textContent = "Letters, numbers, periods, hyphens and underscores."
    let mybr_2 = document.createElement('br');
    let mybr_3 = document.createElement('br');
    //Armar div3
    div_3.appendChild(label_3);
    div_3.appendChild(mybr_2);
    div_3.appendChild(input_3);
    div_3.appendChild(mybr_3)
    div_3.appendChild(p_3);

    //div4
    let div_4 = document.createElement('div');
    div_4.className = "input-box";
    div_4.id = "password-input";

    let label_4 = document.createElement('label');
    label_4.textContent = "Password";

    let input_4 = document.createElement('input');
    input_4.type = "password";
    input_4.name = "password";
    input_4.id = "password";
    input_4.autocomplete = "off";
    input_4.setAttribute = ('required', '');

    let p_4 = document.createElement('p');
    p_4.className = "form__input-error";
    p_4.textContent = "4 to 12 digits.";
    let mybr_4 = document.createElement('br');
    let mybr_5 = document.createElement('br');
    //armar div4
    div_4.appendChild(label_4);
    div_4.appendChild(mybr_4);
    div_4.appendChild(input_4);
    div_4.appendChild(mybr_5);
    div_4.appendChild(p_4);

    //div5
    let div_5 = document.createElement('div');
    div_5.className = "input-box";
    div_5.id = "password2-input";

    let label_5 = document.createElement('label');
    label_5.textContent = "Confirm password";

    let input_5 = document.createElement('input');
    input_5.type = "password";
    input_5.name = "password2";
    input_5.id = "password2";
    input_5.autocomplete = "off";
    input_5.setAttribute = ('required', '');
    
    let p_5 = document.createElement('p');
    p_5.className = "form__input-error";
    p_5.textContent = "different password";
    let mybr_6 = document.createElement('br');
    let mybr_7 = document.createElement('br');

    //armar div5
    div_5.appendChild(label_5);
    div_5.appendChild(mybr_6);
    div_5.appendChild(input_5);
    div_5.appendChild(mybr_7);
    div_5.appendChild(p_5);

    //button
    let button_1 = document.createElement('button');
    button_1.className = "btn";
    button_1.id = "btn";
    button_1.setAttribute = ('disabled', true);
    button_1.type = "submit"
    button_1.style = "margin-bottom: 0";
    button_1.textContent = "Register";

    // armar form
    form_1.appendChild(div_2);
    form_1.appendChild(div_3);
    form_1.appendChild(div_4);
    form_1.appendChild(div_5);
    form_1.appendChild(button_1);

    div_1.appendChild(h1_1);
    div_1.appendChild(form_1);

    let page_1 = document.createElement('page');
    page_1.appendChild(div_1);
    
    container.appendChild(page_1);

    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", "/static/form.js");
    document.body.appendChild(scriptEle);

}

function createFormAddProduct() {
    css.href = "/static/login.css"

    let div = document.createElement('div');
    div.class = "page";
    
    let div_1 = document.createElement('div');
    div_1.className = "form";

    let h1_1 = document.createElement('h1');
    h1_1.textContent = "Formulario de nuevo producto";
    
    let form_1 = document.createElement('form');
    form_1.action = "";
    form_1.method = "POST";
    form_1.enctype = "multipart/form-data";

    let div_2 = document.createElement('div');
    div_2.className = "input-box";

    let label_1 = document.createElement('label');
    label_1.textContent = "Nombre del producto";

    let input_1 = document.createElement('input');
    input_1.type = "text";
    input_1.name = "product_name";
    input_1.autocomplete = "off";

    let mybr_1 = document.createElement('br');

    div_2.appendChild(label_1);
    div_2.appendChild(mybr_1);
    div_2.appendChild(input_1);

    div_1.appendChild(div_2);

    let div_3 = document.createElement('div');
    div_3.className = "input-box";
    
    let label_2 = document.createElement('label');
    label_2.textContent = "Precio";
    
    let input_2 = document.createElement('input');
    input_2.type = "Number";
    input_2.name = "price";
    input_2.autocomplete = "off";

    let mybr_2 = document.createElement('br');

    div_3.appendChild(label_2);
    div_3.appendChild(mybr_2);
    div_3.appendChild(input_2);

    div_1.appendChild(div_3);
    
    let div_4 = document.createElement('div');
    div_4.className = "input-box";

    let label_3 = document.createElement('label');
    label_3.textContent = "Descripción del producto";
    
    let input_3 = document.createElement('input');
    input_3.type = "text";
    input_3.name = "description";
    input_3.autocomplete = "off";
    
    let mybr_3 = document.createElement('br');
    div_4.appendChild(label_3);
    div_4.appendChild(mybr_3);
    div_4.appendChild(input_3);

    div_1.appendChild(div_4);

    let div_5 = document.createElement('div');
    div_5.className = "input-box";

    let label_4 = document.createElement('label');
    label_4.textContent = "Imagen del producto";

    let input_4 = document.createElement('input');
    input_4.type = "file";
    input_4.name = "file";
    input_4.autocomplete = "off";
    let mybr_4 = document.createElement('br');

    div_5.appendChild(label_4);
    div_5.appendChild(mybr_4);
    div_5.appendChild(input_4);

    div_1.appendChild(div_5);

    let div_6 = document.createElement('div');
    div_6.className = "input-box";

    let label_5 = document.createElement('label');
    label_5.textContent = "Categoria del cubo";

    let select_1 = document.createElement('select');
    select_1.id = "category";
    select_1.name = "category";
    select_1.size = "1";
    
    let option_1 = document.createElement('option');
    option_1.value = "2x2";
    option_1.textContent = "2x2";
    let option_2 = document.createElement('option');
    option_2.value = "3x3";
    option_2.textContent = "3x3";
    let option_3 = document.createElement('option');
    option_3.value = "4x4";
    option_3.textContent = "4x4";
    let option_4 = document.createElement('option');
    option_4.value = "5x5 +";
    option_4.textContent = "5x5 +";
    let option_5 = document.createElement('option');
    option_5.value = "Pyramix";
    option_5.textContent = "Pyramix";
    let option_6 = document.createElement('option');
    option_6.value = "Gear Cubes";
    option_6.textContent = "Gear Cubes";
    let option_7 = document.createElement('option');
    option_7.value = "Mirror Cubes";
    option_7.textContent = "Mirror Cubes";

    select_1.appendChild(option_1);
    select_1.appendChild(option_2);
    select_1.appendChild(option_3);
    select_1.appendChild(option_4);
    select_1.appendChild(option_5);
    select_1.appendChild(option_6);
    select_1.appendChild(option_7);

    div_6.appendChild(select_1);
    
    div_1.appendChild(div_6);

    let button_1 = document.createElement('button');
    button_1.className = "btn";
    button_1.type = "submit";
    button_1.style = "margin-bottom: 0;"
    button_1.textContent = "Add Product";

    form_1.appendChild(div_1);
    form_1.appendChild(button_1);
    
    div.appendChild(form_1);
    container.appendChild(div);
}

function createCart(products) {
    css.href = "/static/cart.css";
    let price_t = 0;
    
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        price_t += product['price'];

        // div right-text
        let right_text = document.createElement('div');
        right_text.className = "right_text";

        let a = document.createElement('a');
        a.dataset.page = "product/".concat(product['product_id']);
        a.textContent = product['name'];
        a.className = 'nav-link';
        
        let h2 = document.createElement('h2');
        h2.appendChild(a);
        
        let p = document.createElement('p');
        p.textContent = product['description'];

        right_text.appendChild(h2);
        right_text.appendChild(p);
        
        // div right
        let right = document.createElement('div');
        right.className = "right";

        let img = document.createElement('img');
        img.src = "/static/".concat(product['img']);
        img.height = 230;
        img.width = 230;
        
        right.appendChild(img);
        right.appendChild(right_text);
        
        let button = document.createElement('button');
        button.innerHTML = "REMOVE FROM CART";
        button.onclick = () => {
            remove_from_cart(product['product_id'], "cart-product-".concat(i), product['price'])
        };
        
        // div left
        let h3 =  document.createElement('h3');
        h3.textContent = "S/.".concat(product['price']);
        h3.appendChild(button);
        
        let left = document.createElement('div');
        left.className = "left";
        left.appendChild(h3);
        
        // div container1
        let container1 = document.createElement('div');
        container1.className = "container1";
        container1.id = "cart-product-".concat(i)
        container1.appendChild(right);
        container1.appendChild(left);
        
        container.appendChild(container1);
     
    }

    let h1_1 = document.createElement('h1');

    let p_1 = document.createElement('p_1');
    p_1.id = "cart-price";
    p_1.textContent = "TOTAL:  S/.".concat(price_t);
    p_1.appendChild(h1_1);
        
    container.appendChild(p_1);
}

function displayJSON(json) {
    let displayData = JSON.parse(json);
    createLoginChanges(displayData['user']);
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
    else if (displayData['type'] == "add-product")
        createFormAddProduct();
    load_links();
}
