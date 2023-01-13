const productsContainer = document.querySelector(".our-products");

getProducts();

async function getProducts () {

    // запрос к нашему локальному серваку
    const response = await fetch("./scripts/products.json");
    const productsArray = await response.json();
    renderProducts(productsArray);
};

//функция рендера всех товаров
function renderProducts (productsArray) {

    // бежим по каждому товару
    productsArray.forEach(function(item) {

        // верстка для товара, берет данные из json
        const product = `
            <div class="item-product" data-id=${item.id}>
                <span class="sale">
                    ${item.sale}
                </span>
                <img src="${item.img}" alt="${item.alt}">
                <div class="price-and-box">
                    <div class="basket-block">
                        <span class="product-name">${item.title}</span>
                        <img class="basket-box" src="./imgs/main/products/basket.svg" alt="add" class="icons" id="${item.id}" title="add into basket">
                    </div>
                    <div class="price-and-colors">
                        <div class="left-price">
                            <div class="price">
                                <div class="newPrice">${item.price}</div>
                                <div class="oldPrice">${item.oldPrice}</div>
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
                            <div data-counter="count" class="button-item">${item.counter}</div>
                            <div data-action="plus" class="button-item">+</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // вставака товара в блок с товарами
        productsContainer.insertAdjacentHTML("beforeend", product);
    })
};