const productDetailTabItems = document.querySelectorAll(".tabs-item");

//   Set active
productDetailTabItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".tabs-item.active").classList.remove("active");
    item.classList.add("active");
  });
});

const productDetialRelateSlider = new Swiper(
  ".relate-products .relate-products-slider .swiper",
  {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  }
);
const productDetialRecentSlider = new Swiper(
  ".recent-products .recent-products-slider .swiper",
  {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  }
);
