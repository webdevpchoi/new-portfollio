window.addEventListener('DOMContentLoaded', function(event) {
	'use strict';
	
	const lightBulb = document.querySelector('.lightbulb-img');
	const whiteOut = document.querySelector('.whiteout');

	
	lightBulb.addEventListener('click', function() {
		this.setAttribute('src', './assets/icons/lightbulb-yellow.svg');
		whiteOut.classList.add('animate-whiteout');
	})
	
})