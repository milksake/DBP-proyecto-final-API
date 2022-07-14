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
                history.pushState({'title': name, 'response': response}, name, location.origin + `/${name}`);
            }
            else
            {
                document.title = name;
                let r = {'type': name, 'user': "None"};
                displayJSON(JSON.stringify(r));

                history.pushState({'title': name, 'response': r}, name, location.origin + `/${name}`);
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
        if (request.status = 200)
            alert("Producto añadido al carrito");
        else
            alert("No se pudo añadir este producto");
    };
    request.send();
}