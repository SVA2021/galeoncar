'use strict';

//******* faq accordeon ************************//

const accordeon = document.querySelector('.accordeon__body');
const accordeonItems = accordeon.querySelectorAll('.accordeon__item');

for (const item of accordeonItems) {
	item.addEventListener('click', function () {
		if (item.classList.contains('accordeon__active')) {
			item.classList.remove('accordeon__active');
		} else {
			let activeItem = accordeon.querySelector('.accordeon__active');
			activeItem?.classList.remove('accordeon__active');
			item.classList.add('accordeon__active');
		}
	})
}
