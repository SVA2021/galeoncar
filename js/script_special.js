'use strict';

//******* car cards slider ****************************//
const modalCarCard = document.querySelector('.modal');

// function hideOuterElement(min, max, array) {
// 	for (const element of array) {
// 		let coordinates = element.getBoundingClientRect();
// 		element.style.visibility = 'visible';
// 		if (coordinates.left < min || coordinates.left > max) {
// 			element.style.visibility = 'hidden';
// 		}
// 	}
// }

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
	// const wrapperCoordinate = sliderWrapper.parentElement.getBoundingClientRect();
	// const minPosition = wrapperCoordinate.left;
	// const maxPosition = wrapperCoordinate.right;

	// hideOuterElement(minPosition, maxPosition, items);

	for (const item of items) {
		item.addEventListener('click', function () {
			modalCarCard.style.display = 'flex';

			console.log('click');
		}
		);
	}

	prevBtn.addEventListener('click', function () {
		let position = parseInt(slider.style.left) || 0;
		if (position == 0) return false;
		let newPosition = sliderItemWidth + position + gap;
		slider.style.left = newPosition + 'px';

		// hideOuterElement(minPosition, maxPosition, items);

	})

	nextBtn.addEventListener('click', function () {
		let position = parseInt(slider.style.left) || 0;
		let newPosition = position - sliderItemWidth - gap;
		if (parentWidth + gap + Math.abs(position) >= sliderWidth) return false;
		slider.style.left = newPosition + 'px';

		// hideOuterElement(minPosition, maxPosition, items);

	})
}

const slidersArray = document.querySelectorAll('.card-slider');
const closeCardBtn = document.getElementById('closeCardBtn');

closeCardBtn.addEventListener('click', function (e) {
	modalCarCard.style.display = 'none';
})

for (const slider of slidersArray) {
	setSlidePosition(slider);
}