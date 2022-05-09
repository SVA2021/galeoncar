'use strict';

//******* faq accordeon ************************//

const accordeon = document.querySelector('.accordeon__body');
const accordeonItems = accordeon.querySelectorAll('.accordeon__item');

for (const item of accordeonItems) {
	item.addEventListener('click', function () {
		let list = item.querySelector('.accordeon__sublist');
		// let fullHeight = list.scrollHeight + 'px';
		if (item.classList.contains('accordeon__active')) {
			list.style.maxHeight = 0;
			item.classList.remove('accordeon__active');
		} else {
			let activeItem = accordeon.querySelector('.accordeon__active');
			activeItem?.classList.remove('accordeon__active');
			item.classList.add('accordeon__active');
			let fullHeight = list.scrollHeight + 'px';
			list.style.maxHeight = fullHeight;
		}
	})
}
