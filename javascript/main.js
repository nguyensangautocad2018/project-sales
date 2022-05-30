let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = (e) => {
    searchForm.classList.toggle('active');
}

let cart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = (e) => {
    cart.classList.toggle('active');
}
