const basketCard = document.querySelector(".card-basket");
const circleCountItemsInBasket = document.querySelector('.circle');
const headerCountItemsInBasket = document.querySelector('.circleHeader');
const emptyBasket = document.querySelector(".button-basket");
const orderSum = document.querySelector(".price-basket");

let countItemInBasket = 0;
let priceSum = 0;

// обращаемся ко всему окну
window.addEventListener("click", function(event) {

    const card = event.target.closest('.item-product');
     // находим родителя наших кнопок
    if(event.target.closest('.basket-block img')) {
        emptyBasket.style = "display: none";
        // характеристики нашего очередного товара
        const product = {
            id: card.dataset.id,
            img: card.querySelector('img').getAttribute('src'),
            title: card.querySelector('.product-name').innerHTML,
            counter: card.querySelector('[data-counter]').innerHTML,
            price: card.querySelector('.newPrice').innerHTML,
            priceNumber: parseFloat(card.querySelector('.newPrice').innerHTML.slice(2)),
            oldPriceNumber: parseFloat(card.querySelector('.oldPrice').innerHTML.slice(2)),
        };
        
        // проверить, есть ли товар в корзине, для суммирования кол-ва, а не добавления новых карточек
        // если товара нет, то добавляем карточку новую
        const itemInCard = basketCard.querySelector(`[data-id='${product.id}']`);
        if(itemInCard) {
            const newCounter = itemInCard.querySelector(`[data-counter]`);
            const newPrice = itemInCard.querySelector(".newPrice");
            const oldPrice = itemInCard.querySelector(".oldPrice");
            newCounter.innerHTML = parseInt(newCounter.innerHTML) + +(product.counter) + ` pcs.`;
            newPrice.innerHTML = `$ ` + (newCounter.innerHTML.slice(0, -4) * product.priceNumber).toFixed(1);
            oldPrice.innerHTML = `$ ` + (newCounter.innerHTML.slice(0, -4) * product.oldPriceNumber).toFixed(1);
            priceSum += (product.priceNumber * product.counter);
        } else {
            // карточка товара, то есть так как она будет вставляться в блок корзины
            const cardItem = `
            <div class="item-product basket-item" data-id="${product.id}">
                <img src="${product.img}" alt="headphones">
                <div class="price-and-box">
                    <div class="basket-block">
                        <span class="product-name">${product.title}</span>
                    </div>
                    <div class="price-and-colors">
                        <div class="left-price">
                            <div class="price">
                                <div class="newPrice">${'$ ' + (product.priceNumber * product.counter).toFixed(1)}</div>
                                <div class="oldPrice">${'$ ' + (product.oldPriceNumber * product.counter).toFixed(1)}</div>
                            </div>
                        </div>
                        <div class="buttons">
                            <div class="button-count" data-counter>${product.counter} pcs.</div>
                        </div>
                    </div>
                    <div data-action="delete" class="delete-item" id="${product.id}">Delete this item</div>
                </div>
            </div>
        `;
        
        // сумма цен в корзине
        priceSum += (product.priceNumber * product.counter);

        // вставка нашего товара в наш блок корзины
        basketCard.insertAdjacentHTML('beforeend', cardItem);
    }

    // сумма товаров заносится в html
    orderSum.innerHTML = `The amount of your order: $ ${Math.round(priceSum)}`;

    // кол-во товаров в корзине
    countItemInBasket += +product.counter;
    circleCountItemsInBasket.innerHTML = `${countItemInBasket}`;
    headerCountItemsInBasket.innerHTML = `${countItemInBasket}`;

    // сброс счетчика data-counter после добавления товара
    card.querySelector(`[data-counter]`).innerHTML = 1;
    }

    // удаление всех товаров из корзины 
    if(event.target.closest(".delete-all") && countItemInBasket > 0) {
       deleteAllItems();
    } else if(event.target.closest(".delete-all") && countItemInBasket == 0) {
        this.alert("basket is empty");
    }

    // удаление отдельного товара
    let deleteItemId,
        minusSum,
        minusCount;
    this.document.querySelectorAll(".basket-item").forEach(el => {
        if (el.dataset.id == event.target.id) {
            deleteItemId = el;
            minusSum = +(el.querySelector(".newPrice").innerHTML).slice(2);
            minusCount = +(el.querySelector("[data-counter]").innerHTML).slice(0, -5);
        }
    });
    
    // удаление само
    if(event.target.closest(".delete-item")) {
       basketCard.removeChild(deleteItemId);
       priceSum -= Math.round(minusSum);
       countItemInBasket -= minusCount;
       orderSum.innerHTML = `The amount of your order: $ ${Math.round(priceSum)}`;
       circleCountItemsInBasket.innerHTML = `${countItemInBasket}`;
       headerCountItemsInBasket.innerHTML =  `${countItemInBasket}`;
    }
});

function deleteAllItems () {
    emptyBasket.style = "display: flex";
    
    // смотрим на ласт элемент нашего родителя
    let childNow = basketCard.lastChild;

    // пока он есть, то есть пока условие тру, мы удаляем последний элемент и находим новый последний элемент
    // дальше все по кругу
    while (childNow) {
        basketCard.removeChild(childNow);
        childNow = basketCard.lastChild;
    }
    
    // обнуление счетчика товаров в корзине
    circleCountItemsInBasket.innerHTML = 0;
    headerCountItemsInBasket.innerHTML = 0;
    countItemInBasket = 0;

    // обнуление суммы корзины
    orderSum.innerHTML = `The amount of your order: $ ${0}`;
    priceSum = 0;
};