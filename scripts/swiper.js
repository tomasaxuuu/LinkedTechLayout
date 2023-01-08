const swiper = new Swiper(".swiper", {
    navigation : {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
    },
    // бесконечность
    loop: true,
    // скорость
    speed: 400,
    spaceBetween: 100,
    // автопрокрутка
    autoplay : {
      delay: 3000,
      disableOnInteraction : false,
    },
    // эфффект перелистывания
    effect: 'slide',
});