
const basket = document.querySelector(".card-basket");
const basketBox1 = document.querySelector('.circle');
let countitem = 0;
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
                            <div class="button-count" data-counter>${product.counter + " шт."}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
       
       
        countitem += +product.counter;
         // вставка нашего товара в наш блок
        basket.insertAdjacentHTML('beforeend', cardItem);
        basketBox1.innerHTML = `${countitem}`;
    }
        
});

