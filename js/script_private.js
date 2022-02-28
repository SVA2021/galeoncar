'use strict';

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