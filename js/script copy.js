'use strict';

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