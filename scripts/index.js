const subscribeBtn = document.querySelector(".button-input");
const inputField = document.querySelector('.input');

subscribeBtn.addEventListener("click", () => 
    inputField.value ? inputField.value = "" 
    : alert("Enter your email address")
);

const burgerBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-menu");
const item = document.querySelectorAll(".nav-item");

burgerBtn.addEventListener("click", function() {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

item.forEach(el => el.addEventListener("click", function() {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
}));

const basketBox = document.getElementById("basket-box");
const basketBlock = document.querySelector(".basket-block-1");

basketBox.addEventListener("click", function() {
    basketBox.classList.toggle('redbtn')
    basketBlock.classList.toggle('displayNone');
});