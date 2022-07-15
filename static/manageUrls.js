document.addEventListener('DOMContentLoaded', () => {

    // Start by loading first page.
    load_page('products');

    // Set links up to load new pages.
    load_links();
});

// Update text on popping state.
window.onpopstate = e => {
    const data = e.state;
    document.title = data.title;
    let toDivide = JSON.parse(JSON.stringify(data));
    displayJSON(toDivide['response']);
};

// Renders contents of new page in main view.
function load_page(name) {
    {
        const request = new XMLHttpRequest();
        request.open('GET', location.origin + `/${name}`);
        request.onload = () => {
            if (request.status == 200)
            {
                const response = request.responseText;
                document.title = name;
                displayJSON(response);
                
                // Push state to URL.
                let URLname = name;
                if (URLname == 'logout')
                    URLname = 'products';
                history.pushState({'title': name, 'response': response}, name, location.origin + `/${URLname}`);
            }
            else
            {
                document.title = name;
                let r = {'type': name, 'user': {username: "None"}};
                displayJSON(JSON.stringify(r));

                history.pushState({'title': name, 'response': JSON.stringify(r)}, name, location.origin + `/${name}`);
            }
        };
        request.send();
    }
}

function load_links() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.onclick = () => {
            const page = link.dataset.page;
            load_page(page);
            return false;
        };
    });
}

function add_to_cart(product_id) {
    const request = new XMLHttpRequest();
    request.open('POST', location.origin + "/add-product-to-cart" + `/${product_id}`);
    request.onload = () => {
        if (request.status = 200 && request.responseText == "True")
            alert("Product added to cart");
        else
            alert("Error");
    };
    request.send();
}

function remove_from_cart(product_id, div_id, price) {
    const request = new XMLHttpRequest();
    request.open('POST', location.origin + "/remove-product-from-cart" + `/${product_id}`);
    request.onload = () => {
        if (request.status = 200 && request.responseText == "True")
        {
            alert("Product removed from cart");
            let div = document.getElementById(div_id);
            div.style.display = "none";
            let p = document.getElementById('cart-price');
            let p_string = p.textContent;
            let p_sliced = p_string.substring(11);
            let price_t = parseInt(p_sliced);
            console.log(p_string, p_sliced, price_t, price);
            p.textContent = "TOTAL:  S/.".concat(price_t - price);
        }
        else
            alert("Error");
    };
    request.send();
}