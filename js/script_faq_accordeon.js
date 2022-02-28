'use strict';

//******* faq accordeon ************************//

const accordeon = document.querySelector('.accordeon__body');
const accordeonItems = accordeon.querySelectorAll('.accordeon__item');

for (const item of accordeonItems) {
	item.addEventListener('click', function () {
		item.classList.toggle('accordeon__active');
	})
}
