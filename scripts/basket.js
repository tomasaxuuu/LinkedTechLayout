const basketCard = document.querySelector(".card-basket");
const circleCountItemsInBasket = document.querySelector('.circle');

let countItemInBasket = 0;
// обращаемся ко всему окну
window.addEventListener("click", function(event) {
    
     // находим родителя наших кнопок
    if(event.target.closest('.basket-block img')) {

        const card = event.target.closest('.item-product');

        // характеристики нашего очередного товара
        const product = {
            id: card.dataset.id,
            img: card.querySelector('img').getAttribute('src'),
            title: card.querySelector('.product-name').innerHTML,
            counter: card.querySelector('[data-counter]').innerHTML,
            price: card.querySelector('.newPrice').innerHTML,
            priceNumber: +card.querySelector('.newPrice').innerHTML.slice(2, -3),
        };
        
        // проверить, есть ли товар в корзине, для суммирования кол-ва, а не добавления новых карточек
        // если товара нет, то добавляем карточку новую
        const itemInCard = basketCard.querySelector(`[data-id='${product.id}']`);
        if(itemInCard) {
            const newCounter = itemInCard.querySelector(`[data-counter]`);
            const newPrice = itemInCard.querySelector(".newPrice");
            newCounter.innerHTML = parseInt(newCounter.innerHTML) + +(product.counter) + ` pcs.`;
            newPrice.innerHTML = `$ ` + newCounter.innerHTML.slice(0, -4) * product.priceNumber;
            console.log(newCounter.innerHTML.slice(0, -5));
        } else {

            // карточка товара, то есть так как она будет вставляться в блок корзины
            const cardItem = `
            <div class="item-product" data-id="${product.id}">
                <img src="${product.img}" alt="headphones">
                <div class="price-and-box">
                    <div class="basket-block">
                        <span class="product-name">${product.title}</span>
                    </div>
                    <div class="price-and-colors">
                        <div class="left-price">
                            <div class="price">
                                <div class="newPrice">${'$ ' + product.priceNumber * product.counter}</div>
                            </div>
                        </div>
                        <div class="buttons">
                            <div class="button-count" data-counter>${product.counter + " pcs."}</div>
                        </div>
                    </div>
                    <div class="delete-item">Delete this item</div>
                </div>
            </div>
        `;

        // вставка нашего товара в наш блок корзины
        basketCard.insertAdjacentHTML('beforeend', cardItem);
        }
       
        // кол-во товаров в корзине
        countItemInBasket += +product.counter;
        circleCountItemsInBasket.innerHTML = `${countItemInBasket}`;

        // сброс счетчика data-counter после добавления товара
        card.querySelector(`[data-counter]`).innerHTML = 1;

    }

    // удаление всех товаров из корзины 
    const cardBasket = document.querySelector('.card-basket');
    if(event.target.closest(".delete-all") && countItemInBasket > 0) {

        // смотрим на ласт элемент нашего родителя
        let childNow = cardBasket.lastChild;

        // пока он есть, то есть пока условие тру, мы удаляем последний элемент и находим новый последний элемент
        // дальше все по кругу
        while (childNow) {
            cardBasket.removeChild(childNow);
            childNow = cardBasket.lastChild;
        }

        // обнуление счетчика товаров в корзине
        circleCountItemsInBasket.innerHTML = 0;
        countItemInBasket = 0;
    }

    if(event.target.closest(".delete-item") && countItemInBasket > 0) {
        cardBasket.removeChild(document.querySelector(`[data-id]`));
    }
});

