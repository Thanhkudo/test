const heroSlider1 = new Swiper(
  "#fhm-home-banner .home-banner-slider .swiper.slide-1",
  {
    direction: "horizontal",
    loop: true,
    speed: 1,
    autoplay: {
      delay: 4000,
    },
  }
);
const heroSlider2 = new Swiper(
  "#fhm-home-banner .home-banner-slider .swiper.slide-2",
  {
    direction: "horizontal",
    loop: true,
    speed: 1,
    autoplay: {
      delay: 4000,
    },
  }
);
const heroSlider3 = new Swiper(
  "#fhm-home-banner .home-banner-slider .swiper.slide-3",
  {
    direction: "horizontal",
    loop: true,
    speed: 1,
    autoplay: {
      delay: 4000,
    },
  }
);
const heroSlider4 = new Swiper(
  "#fhm-home-banner .home-banner-slider .swiper.slide-4",
  {
    direction: "horizontal",
    loop: true,
    speed: 1,
    autoplay: {
      delay: 4000,
    },
  }
);

const productSlider1 = new Swiper(
  "#fhm-home-products-1 .products-slider .swiper",
  {
    direction: "horizontal",
    loop: true,
    speed: 1000,
    spaceBetween: 10,
    slidesPerView: 1,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: "#fhm-home-products-1 .products-slider .slider-button-next",
      prevEl: "#fhm-home-products-1 .products-slider .slider-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
    },
  }
);

const productSlider2 = new Swiper(
  "#fhm-home-products-2 .products-slider .swiper",
  {
    direction: "horizontal",
    loop: true,
    speed: 1000,
    spaceBetween: 10,
    slidesPerView: 1,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: "#fhm-home-products-2 .products-slider .slider-button-next",
      prevEl: "#fhm-home-products-2 .products-slider .slider-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
    },
  }
);

const testimonialSlider = new Swiper(
  "#fhm-home-testimonials .testimonials-slider .swiper",
  {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    pagination: {
      el: "#fhm-home-testimonials .testimonials-slider .swiper-pagination",
    },
    navigation: {
      nextEl: "#fhm-home-testimonials .testimonials-slider .slider-button-next",
      prevEl: "#fhm-home-testimonials .testimonials-slider .slider-button-prev",
    },
  }
);

const newsSlider = new Swiper("#fhm-home-news .news-slider .swiper", {
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
});

const buttonsCollapseMenu = document.querySelectorAll(".close-sub-nav");
Array.from(buttonsCollapseMenu).forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement
      .querySelector(".nav-item")
      .classList.toggle("nav-item-bold");
    console.log(button.parentElement);
  });
});

//QUANTITY
if (document.querySelectorAll(".plus")) {
  const plusbtn = document.querySelectorAll(".plus");
  plusbtn.forEach((plus) => {
    plus.addEventListener("click", () => {
      const quantity = plus.parentElement.querySelector(".qty");
      if (quantity.value) {
        quantity.value = parseInt(quantity.value) + 1;
      } else quantity.value = 0;
    });
  });
}
if (document.querySelectorAll(".minus")) {
  const minusbtn = document.querySelectorAll(".minus");
  minusbtn.forEach((minus) => {
    minus.addEventListener("click", () => {
      const quantity = minus.parentElement.querySelector(".qty");
      if (parseInt(quantity.value) > 0) {
        quantity.value = parseInt(quantity.value) - 1;
      } else quantity.value = 0;
    });
  });
}

if (document.querySelectorAll("input")) {
  const inputs = document.querySelectorAll("input");
  Array.from(inputs).forEach((input) => {
    const placeHolderCurrent = input.getAttribute("placeholder");
    input.addEventListener("focus", function () {
      this.setAttribute("placeholder", "");
      const clearInput = this.parentElement.querySelector(".clear-input");

      if (clearInput) {
        //Xử lý sự kiện khi thay đổi input hiển thị nút X
        clearInput.classList.remove("d-none");
        this.addEventListener("input", function () {
          if (this.value == "") {
            clearInput.querySelector(".clear-input svg path").style.fill =
              "#c8c8c8";
          } else {
            clearInput.querySelector(".clear-input svg path").style.fill =
              "#000";
          }
        });

        //Xử lý sự kiện khi clear input
        clearInput.addEventListener("click", () => {
          clearInput.previousElementSibling.value = "";
          clearInput.querySelector("svg path").style.fill = "#c8c8c8";
          input.focus();
        });
      }
      this.addEventListener("focusout", function (e) {
        this.setAttribute("placeholder", placeHolderCurrent);
        if (this.value == "") {
          this.style.outline = "none";
        }
      });

      //Xử lý sự kiện khi click ra ngoài ô input khác
      window.addEventListener("click", (e) => {
        if (
          e.target.parentElement == input.parentElement ||
          e.target.parentElement.parentElement == input.parentElement ||
          e.target.parentElement.parentElement.parentElement ==
            input.parentElement
        ) {
          return false;
        } else {
          if (clearInput) {
            clearInput.classList.add("d-none");
          }
        }
      });
    });
  });
}

// HANDLE LOGIN MODAL
const userButton = document.querySelector(
  "#fhm-header .header-wrapper .header-button-wrapper .user-button"
);
const loginModal = document.querySelector("#fhm-login");
const loginCloseButton = document.querySelector(
  "#fhm-login .login-modal-close-button"
);
const signUpButton = document.querySelector(
  "#fhm-login .login-modal .login-signup .link"
);
const loginTitle = document.querySelector(
  "#fhm-login .login-modal .heading-block .title"
);
const loginButton = document.querySelector(
  "#fhm-login .login-modal .button-solid"
);
let loginModalState = "signup";

userButton.addEventListener("click", () => {
  loginModal.style.animation = "fadeIn ease 0.75s";
  loginModal.style.display = "flex";
});

loginCloseButton.addEventListener("click", () => {
  loginModal.style.animation = "fadeOut ease 0.75s";
  setTimeout(() => {
    loginModal.style.display = "none";
  }, 750);
});

signUpButton.addEventListener("click", () => {
  if (loginModalState == "signup") {
    loginTitle.innerText = "Create an Account";
    loginButton.innerText = "Sign Up";
    loginModalState = "login";
  } else {
    loginTitle.innerText = "Login";
    loginButton.innerText = "Login";
    loginModalState = "signup";
  }
});

// GALLERY DETAIL
// if (
//   document.querySelector("#fhm-quickview-popup .gallery-detail .gallery-view")
// ) {
//   const galleryViewDetail = document.querySelector(
//     ".gallery-detail .gallery-view"
//   );

//   if (document.querySelector(".gallery-detail .gallery-thumbnail-item img")) {
//     const src = document
//       .querySelector(".gallery-detail .gallery-thumbnail-item.active img")
//       .getAttribute("src");
//     const alt = document
//       .querySelector(".gallery-detail .gallery-thumbnail-item.active img")
//       .getAttribute("alt");
//     galleryViewDetail.innerHTML = `<img src="${src}" alt="${alt}"/>`;

//     const galleryThumbnailsDetail = document.querySelectorAll(
//       ".gallery-detail .gallery-thumbnail-item"
//     );
//     const colorsOption = document.querySelectorAll(
//       ".detail .detail-variant .detail-variant-item label input"
//     );
//     const colorChosing = document.querySelector(
//       ".detail .detail-variant .detail-variant-current-selected span"
//     );
//     const galleryArrDetail = Array.prototype.slice.call(
//       galleryThumbnailsDetail
//     );
//     const colorArr = Array.prototype.slice.call(colorsOption);
//     galleryArrDetail.forEach((item) => {
//       item.addEventListener("click", (e) => {
//         galleryArrDetail.forEach((thumbnail) => {
//           if (thumbnail !== e.target) {
//             thumbnail.classList.remove("active");
//           }
//         });

//         item.classList.add("active");

//         if (item.querySelector("img")) {
//           const srcView = item.querySelector("img").getAttribute("src");
//           const altView = item.querySelector("img").getAttribute("alt");
//           galleryViewDetail.innerHTML = `<img src="${srcView}" alt="${altView}"/>`;
//         }

//         if (item.querySelector("video")) {
//           const srcView = item.querySelector("video").getAttribute("src");
//           galleryViewDetail.innerHTML = `<video autoplay muted loop src="${srcView}"/>`;
//         }
//       });

//       colorArr.forEach((color) => {
//         color.addEventListener("click", () => {
//           const colorCurrent = color.getAttribute("value");
//           if (
//             item.hasAttribute("data-color") &&
//             item.getAttribute("data-color") == colorCurrent
//           ) {
//             document
//               .querySelector(".gallery-detail .gallery-thumbnail-item.active")
//               .classList.remove("active");
//             item.classList.add("active");
//             colorChosing.innerText = colorCurrent;
//             if (item.querySelector("img")) {
//               const srcView = item.querySelector("img").getAttribute("src");
//               const altView = item.querySelector("img").getAttribute("alt");
//               galleryViewDetail.innerHTML = `<img src="${srcView}" alt="${altView}"/>`;
//             }

//             if (item.querySelector("video")) {
//               const srcView = item.querySelector("video").getAttribute("src");
//               galleryViewDetail.innerHTML = `<video autoplay muted loop src="${srcView}"/>`;
//             }
//           }
//         });
//       });
//     });
//   }
// }

// GALLERY DETAIL
const handleGalleryView = (el) => {
  const galleryViewDetail = document.querySelector(
    `${el} .gallery-detail .gallery-view`
  );
  const src = document
    .querySelector(".gallery-detail .gallery-thumbnail-item.active img")
    .getAttribute("src");
  const alt = document
    .querySelector(".gallery-detail .gallery-thumbnail-item.active img")
    .getAttribute("alt");
  galleryViewDetail.innerHTML = `<img src="${src}" alt="${alt}"/>`;

  const galleryThumbnailsDetail = document.querySelectorAll(
    ".gallery-detail .gallery-thumbnail-item"
  );
  const colorsOption = document.querySelectorAll(
    ".detail .detail-variant .detail-variant-item label input"
  );
  const colorChosing = document.querySelector(
    ".detail .detail-variant .detail-variant-current-selected span"
  );
  const galleryArrDetail = Array.prototype.slice.call(galleryThumbnailsDetail);
  const colorArr = Array.prototype.slice.call(colorsOption);
  galleryArrDetail.forEach((item) => {
    item.addEventListener("click", (e) => {
      galleryArrDetail.forEach((thumbnail) => {
        if (thumbnail !== e.target) {
          thumbnail.classList.remove("active");
        }
      });

      item.classList.add("active");

      if (item.querySelector("img")) {
        const srcView = item.querySelector("img").getAttribute("src");
        const altView = item.querySelector("img").getAttribute("alt");
        galleryViewDetail.innerHTML = `<img src="${srcView}" alt="${altView}"/>`;
      }

      if (item.querySelector("video")) {
        const srcView = item.querySelector("video").getAttribute("src");
        galleryViewDetail.innerHTML = `<video autoplay muted loop src="${srcView}"/>`;
      }
    });

    colorArr.forEach((color) => {
      color.addEventListener("click", () => {
        const colorCurrent = color.getAttribute("value");
        if (
          item.hasAttribute("data-color") &&
          item.getAttribute("data-color") == colorCurrent
        ) {
          document
            .querySelector(".gallery-detail .gallery-thumbnail-item.active")
            .classList.remove("active");
          item.classList.add("active");
          colorChosing.innerText = colorCurrent;
          if (item.querySelector("img")) {
            const srcView = item.querySelector("img").getAttribute("src");
            const altView = item.querySelector("img").getAttribute("alt");
            galleryViewDetail.innerHTML = `<img src="${srcView}" alt="${altView}"/>`;
          }

          if (item.querySelector("video")) {
            const srcView = item.querySelector("video").getAttribute("src");
            galleryViewDetail.innerHTML = `<video autoplay muted loop src="${srcView}"/>`;
          }
        }
      });
    });
  });
};
if (
  document.querySelector("#fhm-product-detail .gallery-detail .gallery-view")
) {
  handleGalleryView("#fhm-product-detail");
}

handleGalleryView("");

// Handle show password
const inputPasswords = document.querySelectorAll('input[type="password"]');
if (inputPasswords) {
  inputPasswords.forEach((inputPassword) => {
    const showPassword = inputPassword.nextElementSibling;
    showPassword.addEventListener("click", () => {
      if (inputPassword.getAttribute("type") == "password") {
        inputPassword.setAttribute("type", "text");
      } else {
        inputPassword.setAttribute("type", "password");
      }
    });
  });
}
