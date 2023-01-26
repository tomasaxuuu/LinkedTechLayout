// обращаемся ко всему окну
window.addEventListener("click", function(event) {
    let counter;
    if(event.target.dataset.action == "minus" || event.target.dataset.action == "plus") {
         // находим родителя наших кнопок
        const buttonsParent = event.target.closest('.buttons');
        // находим счетчик
        counter = buttonsParent.querySelector('[data-counter]');
        event.target.dataset.action == "minus" ? counter.innerHTML == 1 ? 1 : --counter.innerHTML : ++counter.innerHTML;
    }
});