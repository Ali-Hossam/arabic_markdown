const swiper = new Swiper(".swiper-container", {
  effect: "cards",
  cardsEffect: {
    perSlideOffset: 12,
    perSlideRotate: 8
  },

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  // navigation arrows
  navigation: {
    nextEl: ".next-button",
    prevEl: ".prev-button",
  },
});

console.log(swiper);
