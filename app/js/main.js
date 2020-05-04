// books-items switch

const bookItemButtons = document.querySelectorAll(".left-block__button");
const texts = document.querySelectorAll(".left-block__text");

function delClass(arr, className) {
  const empty = arr.forEach((node) => node.classList.remove(className));
  return empty;
}

bookItemButtons.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    delClass(bookItemButtons, "left-block__button--active");
    btn.classList.add("left-block__button--active");
    texts.forEach((pp) => pp.classList.remove("left-block__text--active"));
    texts[index].classList.add("left-block__text--active");
  });
});

// main switch

const links = document.querySelectorAll(".link");

links.forEach((btn) => {
  btn.addEventListener("click", function () {
    delClass(links, "link--active");
    btn.classList.add("link--active");
  });
});

// slider

const leftBtn = document.querySelector(".fa-caret-square-left");
const rightBtn = document.querySelector(".fa-caret-square-right");
const images = document.querySelectorAll(".advertising-banner");

let currentImg = 0;

rightBtn.addEventListener("click", function () {
  const nextImg = currentImg + 1;

  if (nextImg < images.length) {
    delClass(images, "current-banner");
    images[nextImg].classList.add("current-banner");
    currentImg = nextImg;
  }
});

leftBtn.addEventListener("click", function () {
  if (currentImg > 0) {
    const previousImg = currentImg - 1;
    delClass(images, "current-banner");
    images[previousImg].classList.add("current-banner");
    currentImg = previousImg;
  }
});

// pages

const pages = document.querySelectorAll(".page");

pages.forEach((btn) =>
  btn.addEventListener("click", function () {
    delClass(pages, "page--active");
    btn.classList.add("page--active");
  })
);
