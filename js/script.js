// for Filters
const filterBannerBtn = document.querySelector(".filters--banner--btn");
const filters = document.querySelector(".filters");
const filterBanner = document.querySelector(".filters--banner");
const hideFiltersBtn = document.querySelector(".filters--hide");

filterBannerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    filters.style.display = "block";
})

hideFiltersBtn.addEventListener("click", (e) => {
    e.preventDefault();
    filters.style.display = "none";
})
