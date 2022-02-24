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

//******* form actions  ************************//
const loginForm = document.querySelector('.login');
const signupForm = document.querySelector('.signup');
const restoreForm = document.querySelector('.restore');

const loginFormBtn = signupForm.querySelector('.form__btn-enter');
const signupFormBtn = loginForm.querySelector('.form__btn-reg');
const forgotLink = document.getElementById('forgot');
const authLink = document.getElementById('auth');

loginFormBtn.addEventListener('click', function(e) {
	e.preventDefault();
	signupForm.classList.remove('form__active');
	loginForm.classList.add('form__active');
})

forgotLink.addEventListener('click', function(e) {
	e.preventDefault();
	loginForm.classList.remove('form__active');
	restoreForm.classList.add('form__active');
})

signupFormBtn.addEventListener('click', function(e) {
	e.preventDefault();
	loginForm.classList.remove('form__active');
	signupForm.classList.add('form__active');
})

authLink.addEventListener('click', function(e) {
	e.preventDefault();
	restoreForm.classList.remove('form__active');
	loginForm.classList.add('form__active');
})

loginForm.classList.add('form__active');

// function setLoginForm(e) {
// 	e.preventDefault();
// 	signupForm.classList.remove('form__active');
// 	restoreForm.classList.remove('form__active');
// 	loginForm.classList.add('form__active');
// }

// function setSignupForm(e) {
// 	e.preventDefault();
// 	loginForm.classList.remove('form__active');
// 	signupForm.classList.add('form__active');
// }

// function setRestoreForm(e) {
// 	e.preventDefault();
// 	loginForm.classList.remove('form__active');
// 	restoreForm.classList.add('form__active');
// }

// //******* main search button for modal window  ************************//

// const openSearchModalBtn = document.querySelector('.search__open');
// const closeSearchModalBtn = document.querySelector('.search__close');
// const searchModalWindow = document.querySelector('.search__modal');

// openSearchModalBtn.addEventListener('click', () => {
// 	searchModalWindow.style.display = 'block';
// })

// closeSearchModalBtn.addEventListener('click', () => {
// 	searchModalWindow.style.display = 'none';
// })
