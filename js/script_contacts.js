'use strict';

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