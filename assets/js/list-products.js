// Range slider
const filterRangeSlider = document.querySelector(
  "#fhm-list-product-products .products-filter-item .products-filter-item-range-slider"
);

const filterRangeSliderInputMin = document.querySelector(
  "#fhm-list-product-products .products-filter-item .products-filter-item-range-slider-input .min"
);
const filterRangeSliderInputMax = document.querySelector(
  "#fhm-list-product-products .products-filter-item .products-filter-item-range-slider-input .max"
);

rangeSlider(filterRangeSlider, {
  // min value
  min: 0,
  // max value
  max: 1000,
  // step size
  step: 1,
  // set input value
  value: [0, 1000],
  onInput: function (valueSet) {
    filterRangeSliderInputMin.value = valueSet[0];
    filterRangeSliderInputMax.value = valueSet[1];
  },
});

// Change range slider input value
const changeValue = () => {
  rangeSlider(filterRangeSlider).value([
    filterRangeSliderInputMin.value,
    filterRangeSliderInputMax.value,
  ]);
};

// Set default value input
filterRangeSliderInputMin.value = 0;
filterRangeSliderInputMax.value = 1000;

//filter
const filterItems = document.querySelectorAll(
  "#fhm-list-product-products .products-filter-item"
);

const checkboxItems = document.querySelectorAll(
  "#fhm-list-product-products .products-filter-item-criteria li"
);

filterItems.forEach((filterItem) => {
  // Clear Filter
  if (filterItem.querySelector(".clear-button")) {
    filterItem.querySelector(".clear-button").addEventListener("click", () => {
      filterItem
        .querySelectorAll(".products-filter-item-criteria li .checkbox")
        .forEach((checkbox) => {
          checkbox.setAttribute("data-status", "uncheck");
        });
    });
  }
});

checkboxItems.forEach((checkboxItem) => {
  // Select box
  checkboxItem.addEventListener("click", () => {
    if (
      checkboxItem.querySelector(".checkbox").getAttribute("data-status") ==
      "uncheck"
    ) {
      checkboxItem
        .querySelector(".checkbox")
        .setAttribute("data-status", "check");
    } else {
      checkboxItem
        .querySelector(".checkbox")
        .setAttribute("data-status", "uncheck");
    }
  });
});

// Render color
const colorCheckboxs = document.querySelectorAll(
  "#fhm-list-product-products .products-filter-item .products-filter-item-criteria li .checkbox-color"
);

colorCheckboxs.forEach((colorCheckbox) => {
  colorCheckbox.style.backgroundColor = `#${colorCheckbox.getAttribute(
    "data-color"
  )}`;
});

// Show more content
const showMore = document.querySelector(".products-list-guide-btn");
showMore.addEventListener("click", () => {
  document
    .querySelector(".products-list-guide-content")
    .classList.toggle("show");
  const contentBtn = showMore.querySelector("span");
  if (contentBtn.innerHTML == "Show More") {
    contentBtn.innerHTML = "Hide";
  } else contentBtn.innerHTML = "Show More";
});

// Toggle mobile filter
const openFilterButton = document.querySelector(
  "#fhm-list-product-products .products-filter-toggle-button"
);

const closeFilterButton = document.querySelector(
  "#fhm-list-product-products .products-filter-toggle-button-close"
);

const productFilterList = document.querySelector(
  "#fhm-list-product-products .products-filter-list"
);

openFilterButton.addEventListener("click", () => {
  productFilterList.classList.add("active");
});

closeFilterButton.addEventListener("click", () => {
  productFilterList.classList.remove("active");
});
