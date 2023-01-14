const basketCard = document.querySelector(".card-basket");
const circleCountItemsInBasket = document.querySelector('.circle');
const headerCountItemsInBasket = document.querySelector('.circleHeader');
const emptyBasket = document.querySelector(".button-basket");
const orderSum = document.querySelector(".price-basket");
const addBasket = document.querySelectorAll(".basket-box");
const count = document.querySelector("[data-counter]");
// обращаемся ко всему окну

addBasket.forEach(el => el.addEventListener("click", function() {
    if(el.id == count.id) {
        console.log(count.innerHTML);
    }
    CATALOG.forEach(product => {
        let cardItem = '';
        if(product.id == el.id) {
            
            cardItem += `
                <div class="item-product basket-item" data-id="${product.id}">
                    <img src="${product.img}" alt="headphones">
                    <div class="price-and-box">
                        <div class="basket-block">
                            <span class="product-name">${product.title}</span>
                        </div>
                        <div class="price-and-colors">
                            <div class="left-price">
                            </div>
                            <div class="buttons">
                            <div class="button-count" data-counter>${count.innerText} pcs.</div>
                            </div>
                        </div>
                        <div data-action="delete" class="delete-item" id="${product.id}">Delete this item</div>
                    </div>
                </div>
            `;
            console.log(cardItem);
            basketCard.innerHTML += cardItem;
        }
    });
    
}));
