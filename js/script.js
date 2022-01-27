'use strict';

//******* header functionality ************************//
// menu hamburger button expand/collapse
const menuBtn = document.querySelector('.header__menu-bar');
const appShop = document.querySelector('.header__app-shop');
const menuList = document.querySelector('.menu__body');
let windowWidth = document.documentElement.clientWidth;

// if (windowWidth < 1000) {
	menuBtn.addEventListener('click', () => {
		if (windowWidth <= 767) {
			appShop.classList.toggle('app-shop__active');
		}
		menuList.classList.toggle('menu__active');
	}
	);
// }