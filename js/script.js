'use strict';

//******* header functionality ************************//
// menu hamburger button expand/collapse
const menuBtn = document.querySelector('.header__menu-bar');
const appShop = document.querySelector('.header__app-shop');
// const menuList = document.querySelector('.menu__body');
const menuList = document.querySelector('.header__menu');

let windowWidth = document.documentElement.clientWidth;
let windWidth = document.documentElement.offsetWidth;

menuBtn.addEventListener('click', () => {
	if (windowWidth <= 767) {
		appShop.classList.toggle('app-shop__active');
	}
	menuList.classList.toggle('menu__active');
}
);

//******* main search button for modal window  ************************//

const openSearchModalBtn = document.querySelector('.search__open');
const closeSearchModalBtn = document.querySelector('.search__close');
const searchModalWindow = document.querySelector('.search__modal');

openSearchModalBtn.addEventListener('click', () => {
	searchModalWindow.style.display = 'block';
})

closeSearchModalBtn.addEventListener('click', () => {
	searchModalWindow.style.display = 'none';
})



//******* main banner slider ****************************//


//******* main banner slider content loading***********************//

function normalizeDigit(dig) {
	if (dig > 9) return dig;
	return '0' + dig;
}
let bannerContent = document.getElementById('bannerSliderBody');

for (let i = 1; i < 16; i++) {
	bannerContent.insertAdjacentHTML("beforeend", `<div class="slider__slide js-slide">
	<img src="./img/main/slider_320_` + normalizeDigit(i) + `.webp" alt="car">
</div>`);
}

function infiniteIncIndex(activeIndex, qty) {
	if (activeIndex === qty - 1) return 0;
	return ++activeIndex;
}

function infiniteDecIndex(activeIndex, qty) {
	if (activeIndex === 0) return qty - 1;
	return --activeIndex;
}

function initialSetupSlider(array, activeSlideIndex) {
	let activeSlide = array[activeSlideIndex];
	let prevSlide = array[infiniteDecIndex(activeSlideIndex, array.length)];
	let nextSlide = array[infiniteIncIndex(activeSlideIndex, array.length)];

	activeSlide.classList.add('slide__active');
	prevSlide.classList.add('slide__prev');
	nextSlide.classList.add('slide__next');
}

function setNextSlide(array, activeSlideIndex) {
	let prevSlideIndex = infiniteDecIndex(activeSlideIndex, array.length);
	let nextSlideIndex = infiniteIncIndex(activeSlideIndex, array.length);

	let activeSlide = array[activeSlideIndex];
	let prevSlide = array[prevSlideIndex];
	let nextSlide = array[nextSlideIndex];

	activeSlide.classList.remove('slide__active');
	prevSlide.classList.remove('slide__prev');
	nextSlide.classList.remove('slide__next');

	let newActiveSlideIndex = infiniteIncIndex(activeSlideIndex, array.length);
	let newPrevSlideIndex = infiniteIncIndex(prevSlideIndex, array.length);
	let newNextSlideIndex = infiniteIncIndex(nextSlideIndex, array.length);

	let newActiveSlide = array[newActiveSlideIndex];
	let newPrevSlide = array[newPrevSlideIndex];
	let newNextSlide = array[newNextSlideIndex];

	newActiveSlide.classList.add('slide__active');
	newPrevSlide.classList.add('slide__prev');
	newNextSlide.classList.add('slide__next');
}

function setPrevSlide(array, activeSlideIndex) {
	let prevSlideIndex = infiniteDecIndex(activeSlideIndex, array.length);
	let nextSlideIndex = infiniteIncIndex(activeSlideIndex, array.length);

	let activeSlide = array[activeSlideIndex];
	let prevSlide = array[prevSlideIndex];
	let nextSlide = array[nextSlideIndex];

	activeSlide.classList.remove('slide__active');
	prevSlide.classList.remove('slide__prev');
	nextSlide.classList.remove('slide__next');

	let newActiveSlideIndex = infiniteDecIndex(activeSlideIndex, array.length);
	let newPrevSlideIndex = infiniteDecIndex(prevSlideIndex, array.length);
	let newNextSlideIndex = infiniteDecIndex(nextSlideIndex, array.length);

	let newActiveSlide = array[newActiveSlideIndex];
	let newPrevSlide = array[newPrevSlideIndex];
	let newNextSlide = array[newNextSlideIndex];

	newActiveSlide.classList.add('slide__active');
	newPrevSlide.classList.add('slide__prev');
	newNextSlide.classList.add('slide__next');
}

let slideQty = 3;

const bannerSliderWrapper = document.getElementById('bannerSlider');

function setSlider(sliderWrapper) {

	let activeSlideIndex = 1;
	const sliderNextBtn = sliderWrapper.querySelector('.js-next');
	const sliderPrevBtn = sliderWrapper.querySelector('.js-prev');
	const sliderArray = Array.from(sliderWrapper.querySelectorAll('.js-slide'));

	initialSetupSlider(sliderArray, activeSlideIndex);

	sliderNextBtn.addEventListener('click', () => {
		setNextSlide(sliderArray, activeSlideIndex);
		activeSlideIndex = infiniteIncIndex(activeSlideIndex, sliderArray.length);
	});

	sliderPrevBtn.addEventListener('click', () => {
		setPrevSlide(sliderArray, activeSlideIndex);
		activeSlideIndex = infiniteDecIndex(activeSlideIndex, sliderArray.length);
	});
}



setSlider(bannerSliderWrapper);

// initialSetupSlider(bannerArray, activeSlideIndex);

// bannerNextBtn.addEventListener('click', () => {
// 	setNextSlide(bannerArray, activeSlideIndex);
// })

// bannerPrevBtn.addEventListener('click', () => {
// 	setPrevSlide(bannerArray, activeSlideIndex);
// })

// console.log(bannerNextBtn);
// console.log(bannerPrevBtn);
// console.log(bannerArray);
// const warp = document.querySelector('.wrapper');
// const bod = document.body.offsetWidth;
// console.log(bod);
// let wd = warp.offsetWidth;
// console.log(wd);