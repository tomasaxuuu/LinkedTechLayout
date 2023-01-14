const productsContainer = document.querySelector(".our-products");
renderProducts();
//функция рендера всех товаров
function renderProducts () {
    let CATALOG = []; 
    fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(body => {
            CATALOG = body;
            let product = '';
            CATALOG.forEach(el => {
                product += `
                <div class="item-product" data-id=${el.id}>
                    <span class="sale">
                        ${el.sale}
                    </span>
                    <img src="${el.img}" alt="${el.alt}">
                    <div class="price-and-box">
                        <div class="basket-block">
                            <span class="product-name">${el.title}</span>
                            <img class="basket-box" src="./imgs/main/products/basket.svg" alt="add" class="icons" id="${el.id}" title="add into basket">
                        </div>
                        <div class="price-and-colors">
                            <div class="left-price">
                                <div class="price">
                                    <div class="newPrice">${el.price}</div>
                                    <div class="oldPrice">${el.oldPrice}</div>
                                </div>
                                <div class="stars-block">
                                    <img src="./imgs/main/star.svg" alt="star" class="star">
                                    <img src="./imgs/main/star.svg" alt="star" class="star">
                                    <img src="./imgs/main/star.svg" alt="star" class="star">
                                    <img src="./imgs/main/star.svg" alt="star" class="star">
                                    <img src="./imgs/main/star.svg" alt="star" class="star">
                                </div>
                            </div>
                            <div class="buttons">
                                <div data-action="minus"class="button-item">-</div>
                                <div data-counter="count" class="button-item">${el.counter}</div>
                                <div data-action="plus" class="button-item">+</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            });
            
            // вставака товара в блок с товарами
            productsContainer.insertAdjacentHTML('beforeend', product);
        })
};