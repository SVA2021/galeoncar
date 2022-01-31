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

// function normalizeDigit(dig) {
// 	if (dig > 9) return dig;
// 	return '0' + dig;
// }
// let bannerContent = document.getElementById('bannerSliderBody');
// let bannerWidth = bannerContent.clientWidth;
// console.log(bannerWidth);
// let slideResolution = '768';
// if (bannerWidth < 300) slideResolution = '320';
// if (bannerWidth > 1300) slideResolution = '1920';

// for (let i = 1; i < 16; i++) {
// 	bannerContent.insertAdjacentHTML("beforeend",
// 		`<div class="slider__slide js-slide">
// 	<img src="./img/main/slider_`+ slideResolution + `_` + normalizeDigit(i)
// 		+ `.webp" alt="car">
// </div>`);
// }

// function infiniteIncIndex(activeIndex, qty) {
// 	if (activeIndex === qty - 1) return 0;
// 	return ++activeIndex;
// }

// function infiniteDecIndex(activeIndex, qty) {
// 	if (activeIndex === 0) return qty - 1;
// 	return --activeIndex;
// }

// function initialSetupSlider(array, activeSlideIndex) {
// 	let prevSlideIndex = infiniteDecIndex(activeSlideIndex, array.length);
// 	let nextSlideIndex = infiniteIncIndex(activeSlideIndex, array.length);
// 	let prev2SlideIndex = infiniteDecIndex(prevSlideIndex, array.length);
// 	let next2SlideIndex = infiniteIncIndex(nextSlideIndex, array.length);

// 	let activeSlide = array[activeSlideIndex];
// 	let prevSlide = array[prevSlideIndex];
// 	let nextSlide = array[nextSlideIndex];
// 	let prev2Slide = array[prev2SlideIndex];
// 	let next2Slide = array[next2SlideIndex];

// 	activeSlide.classList.add('slide__active');
// 	prevSlide.classList.add('slide__prev');
// 	nextSlide.classList.add('slide__next');
// 	prev2Slide.classList.add('slide__prev2');
// 	next2Slide.classList.add('slide__next2');
// }

// function setNextSlide(array, activeSlideIndex) {
// 	let prevSlideIndex = infiniteDecIndex(activeSlideIndex, array.length);
// 	let nextSlideIndex = infiniteIncIndex(activeSlideIndex, array.length);
// 	let prev2SlideIndex = infiniteDecIndex(prevSlideIndex, array.length);
// 	let next2SlideIndex = infiniteIncIndex(nextSlideIndex, array.length);

// 	let activeSlide = array[activeSlideIndex];
// 	let prevSlide = array[prevSlideIndex];
// 	let nextSlide = array[nextSlideIndex];
// 	let prev2Slide = array[prev2SlideIndex];
// 	let next2Slide = array[next2SlideIndex];

// 	activeSlide.classList.remove('slide__active');
// 	prevSlide.classList.remove('slide__prev');
// 	nextSlide.classList.remove('slide__next');
// 	prev2Slide.classList.remove('slide__prev2');
// 	next2Slide.classList.remove('slide__next2');

// 	let newActiveSlideIndex = infiniteIncIndex(activeSlideIndex, array.length);
// 	let newPrevSlideIndex = infiniteIncIndex(prevSlideIndex, array.length);
// 	let newNextSlideIndex = infiniteIncIndex(nextSlideIndex, array.length);

// 	let newActiveSlide = array[newActiveSlideIndex];
// 	let newPrevSlide = array[newPrevSlideIndex];
// 	let newNextSlide = array[newNextSlideIndex];

// 	newActiveSlide.classList.add('slide__active');
// 	newPrevSlide.classList.add('slide__prev');
// 	newNextSlide.classList.add('slide__next');
// }

// function setPrevSlide(array, activeSlideIndex) {
// 	let prevSlideIndex = infiniteDecIndex(activeSlideIndex, array.length);
// 	let nextSlideIndex = infiniteIncIndex(activeSlideIndex, array.length);

// 	let activeSlide = array[activeSlideIndex];
// 	let prevSlide = array[prevSlideIndex];
// 	let nextSlide = array[nextSlideIndex];

// 	activeSlide.classList.remove('slide__active');
// 	prevSlide.classList.remove('slide__prev');
// 	nextSlide.classList.remove('slide__next');

// 	let newActiveSlideIndex = infiniteDecIndex(activeSlideIndex, array.length);
// 	let newPrevSlideIndex = infiniteDecIndex(prevSlideIndex, array.length);
// 	let newNextSlideIndex = infiniteDecIndex(nextSlideIndex, array.length);

// 	let newActiveSlide = array[newActiveSlideIndex];
// 	let newPrevSlide = array[newPrevSlideIndex];
// 	let newNextSlide = array[newNextSlideIndex];

// 	newActiveSlide.classList.add('slide__active');
// 	newPrevSlide.classList.add('slide__prev');
// 	newNextSlide.classList.add('slide__next');
// }

// let slideQty = 3;

// const bannerSliderWrapper = document.getElementById('bannerSlider');

// function setSlider(sliderWrapper) {

// 	let activeSlideIndex = 1;
// 	const sliderNextBtn = sliderWrapper.querySelector('.js-next');
// 	const sliderPrevBtn = sliderWrapper.querySelector('.js-prev');
// 	const sliderArray = Array.from(sliderWrapper.querySelectorAll('.js-slide'));

// 	initialSetupSlider(sliderArray, activeSlideIndex);

// 	sliderNextBtn.addEventListener('click', () => {
// 		setNextSlide(sliderArray, activeSlideIndex);
// 		activeSlideIndex = infiniteIncIndex(activeSlideIndex, sliderArray.length);
// 	});

// 	sliderPrevBtn.addEventListener('click', () => {
// 		setPrevSlide(sliderArray, activeSlideIndex);
// 		activeSlideIndex = infiniteDecIndex(activeSlideIndex, sliderArray.length);
// 	});
// }

// setSlider(bannerSliderWrapper);

//! first tryouts 

//******* main banner slider content loading***********************//

function normalizeDigit(dig) {
	if (dig > 9) return dig;
	return '0' + dig;
}

let bannerContent = document.getElementById('bannerSliderBody');

// load only slider images with actual screen resolution
let bannerWidth = bannerContent.clientWidth;
let slideResolution = '768';
if (bannerWidth < 300) slideResolution = '320';
if (bannerWidth > 1300) slideResolution = '1920';

for (let i = 1; i <= 15; i++) {
	bannerContent.insertAdjacentHTML("beforeend",
		`<div class="slider__slide js-slide">
			<img src="./img/main/slider_`+ slideResolution + `_` + normalizeDigit(i)
		+ `.webp" alt="car">
		</div>`);
}

//******* main banner slider ****************************//

function setIndexArray(activeIndex, arrayLength, visibleSlideQty = 5) {
	let result = [];
	for (let i = 0; i < visibleSlideQty; i++) {
		let newIndex = i + activeIndex - 2;
		(newIndex < 0) ? newIndex += arrayLength : newIndex;
		(newIndex >= arrayLength) ? newIndex -= arrayLength : newIndex;
		result.push(newIndex);
	}
	return result;
}

function cleanClass(activeIndex, array) {
	let currentSlides = setIndexArray(activeIndex, array.length);
	for (const slideIndex of currentSlides) {
		let slide = array[slideIndex];
		slide.className = "slider__slide js-slide";
	}
}

function set5Slides(activeIndex, array) {

	let currentSlides = setIndexArray(activeIndex, array.length);

	let prev2Slide = array[currentSlides[0]];
	let prevSlide = array[currentSlides[1]];
	let activeSlide = array[currentSlides[2]];
	let nextSlide = array[currentSlides[3]];
	let next2Slide = array[currentSlides[4]];

	prev2Slide.classList.add('slide__prev2');
	prevSlide.classList.add('slide__prev');
	activeSlide.classList.add('slide__active');
	nextSlide.classList.add('slide__next');
	next2Slide.classList.add('slide__next2');

}

const bannerSliderWrapper = document.getElementById('bannerSlider');

function setSlider(sliderWrapper) {

	const sliderNextBtn = sliderWrapper.querySelector('.js-next');
	const sliderPrevBtn = sliderWrapper.querySelector('.js-prev');
	const sliderArray = Array.from(sliderWrapper.querySelectorAll('.js-slide'));

	let activeSlide = 1;
	let slidersQty = sliderArray.length;

	set5Slides(activeSlide, sliderArray);

	sliderNextBtn.addEventListener('click', () => {
		cleanClass(activeSlide, sliderArray);
		(activeSlide >= slidersQty) ? activeSlide -= slidersQty : activeSlide++;
		set5Slides(activeSlide, sliderArray);
	});

	sliderPrevBtn.addEventListener('click', () => {
		cleanClass(activeSlide, sliderArray);
		(activeSlide == 0) ? activeSlide = slidersQty - 1 : activeSlide--;
		set5Slides(activeSlide, sliderArray);
	});
}

setSlider(bannerSliderWrapper);