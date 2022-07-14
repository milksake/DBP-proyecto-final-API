const container = document.getElementById("product-container");
const css = document.getElementById('css-link');

function getProducts()
{
    let url = location.origin.concat("/get-all-products");
    console.log(url)

    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.open( "GET", url, false);
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function createProducts(products) {
    css.href = "/static/style.css"
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        //<a href="{{ url_for('display_product', id=product.id) }}">{{product.name}}</a></h2>
                
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
    /*
    <div class ="container1">
        <h1>{{product.name}}</h1>
        <img style="border: 3px solid; color: rgb(38, 11, 3);" img src="{{url_for('static', filename=product.image)}}" alt="" width="600" height="600" />
        <h2>S/.{{product.price}}</h2>
        <h3>Stars: {{product.stars}}  &#11088 </h3>
        <h3>Submitted by: {{product.user.username}}</h3>
        <p>{{product.description}}</p>
        <button><a href="{{url_for('add_to_cart', id=product.id)}}">Add to cart &#128722; </a></button> 
    </div>
    */
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
    h3_1.textContent = product['stars'].toString().concat(" &#11088");
    let h3_2 = document.createElement('h3');
    h3_2.textContent = "Submitted by: " + product['username'];
    let p = document.createElement('p');
    p.textContent = product['description'];
    let button = document.createElement('button');
    button.innerHTML = "ADD TO CART &#128722"
    //div
    let container1 = document.createElement('div');
    container1.className = "container1";
    container.appendChild(h1);
    container.appendChild(img);
    container.appendChild(h2);
    container.appendChild(h3_1);
    container.appendChild(h3_2);
    container.appendChild(p);
    container.appendChild(button);
}

function displayProducts(json) {
    let products = JSON.parse(json);
    while (container.childElementCount > 0)
        container.removeChild(container.lastChild);
    createProducts(products['data']);
}

function displayJSON(json) {
    let displayData = JSON.parse(json);
    while (container.childElementCount > 0)
        container.removeChild(container.lastChild);
    if (displayData['type'] == 'all products')
        createProducts(displayData['data']);
    else if (displayData['type'] == 'one product')
        createOneProduct(displayData['data']);
    load_links();
}
