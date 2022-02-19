'use strict';

//******* header ************************//
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

console.log(menuList.parentElement.offsetWidth);