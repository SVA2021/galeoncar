'use strict';

//******* header functionality ************************//
// menu hamburger button expand/collapse
const menuBtn = document.querySelector('.header__menu-bar');
const appShop = document.querySelector('.header__app-shop');
const menuList = document.querySelector('.menu__body');

menuBtn.addEventListener('click', () => {
	appShop.classList.toggle('app-shop__active');
	menuList.classList.toggle('menu__active');
}
);

// for (const item of itemExpandedArray) {
// 	item.addEventListener('click', (event) => {
// 		event.preventDefault();
// 		let hiddenList = item.nextElementSibling;
// 		hiddenList.classList.toggle('item__active');
// 	})
// }

// let result = document.querySelector('.main').style.font;
// console.log(result);