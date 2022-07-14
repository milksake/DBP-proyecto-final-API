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
    toDivide = JSON.parse(JSON.stringify(data))
    displayJSON(toDivide['response']);
};

// Renders contents of new page in main view.
function load_page(name) {
    const request = new XMLHttpRequest();
    request.open('GET', location.origin + `/${name}`);
    request.onload = () => {
        const response = request.responseText;
        document.title = name;
        displayJSON(response);

        // Push state to URL.
        history.pushState({'title': name, 'response':response}, name, location.origin + `/${name}`);
    };
    request.send();
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