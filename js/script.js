'use strict';

//******* header functionality ************************//
// menu hamburger button expand/collapse
const menuBtn = document.querySelector('.menu__icon');
const menu = document.querySelector('.header__container');
const itemExpandedArray = document.querySelectorAll('.item__expand');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
}
);

for (const item of itemExpandedArray) {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		let hiddenList = item.nextElementSibling;
		hiddenList.classList.toggle('item__active');
	})
}

let result = document.querySelector('.main').style.font;
console.log(result);