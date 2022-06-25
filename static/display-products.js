const container = document.getElementById("product-container");

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
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        //<a href="{{ url_for('display_product', id=product.id) }}">{{product.name}}</a></h2>
                
        //inner
        let img = document.createElement('img');
        img.src = "/static/".concat(product['img']);
        img.height = 230;
        img.width = 230;
        let a = document.createElement('a');
        a.href = location.origin.concat("/product/", product['product_id']);
        a.textContent = product['name'];
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

function displayProducts() {
    let products = JSON.parse(getProducts());
    createProducts(products);
}

window.addEventListener("load", function () {
   displayProducts() ;
});