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
    form_2.method="post";

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
    form_1.appendChild(div_1);
    form_1.appendChild(div_2);
    form_1.appendChild(p_1);
    form_1.appendChild(button_1);

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

    //div2
    let div_2 = document.createElement('div');
    div_2.className = "input-box";
    div_2.id = "username-input"
    let label_1 = document.createElement('label');
    label_1.textContent = "Username";
    let input_1 = document.createElement('input');
    input_1.type = "text";
    input_1.name = "username";
    input_1.autocomplete = "off";
    input_1.setAttribute = ('required', '');
    let p_1 = document.createElement('p');
    p_1.className = "form__input-error";
    p_1.textContent = "4 to 16 digits, numbers, letters and underscore."
    let mybr_1 = document.createElement('br');
    
    //armar div2
    div_2.appendChild(label_1);
    div_2.appendChild(mybr_1)
    div_2.appendChild(input_1);

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
    div_4.id = "password-input"

    let label_4 = document.createElement('label');
    label_4.textContent = "Password";

    let input_4 = document.createElement('input');
    input_4.type = "password";
    input_4.name = "password";
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

    let label_5 = document.createElement('label');
    label_5.textContent = "Confirm password";

    let input_5 = document.createElement('input');
    input_5.type = "password";
    input_5.name = "password-repeat";
    input_5.autocomplete = "off";
    input_5.setAttribute = ('required', '');
    let mybr_6 = document.createElement('br');

    //armar div5
    div_5.appendChild(label_5);
    div_5.appendChild(mybr_6);
    div_5.appendChild(input_5);

    //button
    let button_1 = document.createElement('button');
    button_1.className = "btn";
    button_1.type = "submit"
    button_1.style = "margin-bottom: 0";
    button_1.textContent = "Register";

    div_1.appendChild(h1_1);
    div_1.appendChild(div_2);
    div_1.appendChild(div_3);
    div_1.appendChild(div_4);
    div_1.appendChild(div_5);
    div_1.appendChild(button_1);

    let page_1 = document.createElement('page');
    page_1.appendChild(div_1);
    
    container.appendChild(page_1);
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
