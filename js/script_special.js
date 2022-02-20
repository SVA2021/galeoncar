'use strict';

const windowWidth = document.documentElement.clientWidth;
const windWidth = document.documentElement.offsetWidth;

//******* header ************************//
const menuBtn = document.querySelector('.header__menu-bar');
const appShop = document.querySelector('.header__app-shop');
const menuList = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
	if (windowWidth <= 767) {
		appShop.classList.toggle('app-shop__active');
	}
	menuList.classList.toggle('menu__active');
}
);

//******* car cards slider ****************************//

function hideOuterElement(min, max, array) {
	for (const element of array) {
		let coordinates = element.getBoundingClientRect();
		element.style.visibility = 'visible';
		if (coordinates.left < min || coordinates.left > max) {
			element.style.visibility = 'hidden';
		}
		// console.log(min, max, coordinates.left, coordinates.right);
	}
	console.log('divider');
}

function setSlidePosition(sliderWrapper) {

	const slider = sliderWrapper.querySelector('.card-slider__body');
	const sliderItem = sliderWrapper.querySelector('.card-slider__item');
	const nextBtn = sliderWrapper.querySelector('.card-slider__navigation-next');
	const prevBtn = sliderWrapper.querySelector('.card-slider__navigation-prev');
	const items = sliderWrapper.querySelectorAll('.card-slider__item');

	const sliderWidth = slider.offsetWidth;
	const sliderItemWidth = sliderItem.offsetWidth;
	const parentWidth = sliderWrapper.parentElement.offsetWidth;
	const gap = 24; // constant in mockup
	const wrapperCoordinate = sliderWrapper.parentElement.getBoundingClientRect();
	const minPosition = wrapperCoordinate.left;
	const maxPosition = wrapperCoordinate.right;

	hideOuterElement(minPosition, maxPosition, items);

	prevBtn.addEventListener('click', function () {
		let position = parseInt(slider.style.left) || 0;
		if (position == 0) return false;
		let newPosition = sliderItemWidth + position + gap;
		slider.style.left = newPosition + 'px';

		hideOuterElement(minPosition, maxPosition, items);

	})

	nextBtn.addEventListener('click', function () {
		let position = parseInt(slider.style.left) || 0;
		let newPosition = position - sliderItemWidth - gap;
		if (parentWidth + gap + Math.abs(position) >= sliderWidth) return false;
		slider.style.left = newPosition + 'px';

		hideOuterElement(minPosition, maxPosition, items);

	})
}

const transferSlider = document.querySelector('.transfer__slider');
const meetingSlider = document.querySelector('.meeting__slider');
setSlidePosition(transferSlider);
setSlidePosition(meetingSlider);
