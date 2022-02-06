'use strict';

//******* header ************************//
const menuBtn = document.querySelector('.header__menu-bar');
const appShop = document.querySelector('.header__app-shop');
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

//******* contacts hide menu  ************************//

const contactsBlock = document.querySelector('.contacts__inner');
const contactsOpen = document.querySelector('.contacts__open');
const contactsClose = document.querySelector('.contacts__close');

contactsClose.addEventListener('click', function (e) {
	contactsBlock.style.display = 'none';
})

contactsOpen.addEventListener('click', function (e) {
	contactsBlock.style.display = 'block';
})