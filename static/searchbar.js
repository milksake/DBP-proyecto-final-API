function search() {
    const searchBarInput = document.querySelector('.searchbar input');
    const request = new XMLHttpRequest();
    request.open('GET', window.location.origin + "/search/" + searchBarInput.value);
    request.onload = () => {
        if (request.status = 200)
            displayJSON(request.responseText);
        else
            alert("Error");
    };
    request.send();
}