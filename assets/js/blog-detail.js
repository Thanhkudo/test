const blogDetailImageSlider = new Swiper(
  "#fhm-blog-detail .blog-detail .image-wrapper .swiper",
  {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  }
);

const blogDetailNewsSlider = new Swiper(
  "#fhm-blog-detail-news .news-slider .swiper",
  {
    direction: "horizontal",
    speed: 1000,
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      480: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      991: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
    },
  }
);
