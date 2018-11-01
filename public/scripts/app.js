window.addEventListener('DOMContentLoaded', function(event) {
	'use strict';

	const lightBulb= document.querySelector('.lightbulb');
	const lightBulbImg = document.querySelector('.lightbulb-img');
	const whiteOut = document.querySelector('.whiteout');

	lightBulbImg.addEventListener('click', function() {
		this.setAttribute('src', './assets/icons/lightbulb-yellow.svg');
		whiteOut.classList.add('animate-whiteout');
	})

	whiteOut.addEventListener('animationend', function() {
		lightBulb.classList.add('transition-lightbulb');
	});
})