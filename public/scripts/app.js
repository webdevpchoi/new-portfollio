window.addEventListener('DOMContentLoaded', function(event) {
	'use strict';

	//helper function to see if element is in viewport
	let isInViewport = function(elem) {
		const bounding = elem.getBoundingClientRect();
		return (
			bounding.top >= 0 &&
	        bounding.left >= 0 &&
	        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
		)
	}

	const container = document.querySelector('.container');
	const portfolio = document.querySelector('.portfolio');

	container.addEventListener('wheel', function(e) {
		//scrolling down
		if (e.deltaY > 0) {
			if(portfolio.classList.contains('portfolio-inactive')) {
				portfolio.classList.remove('portfolio-inactive');
				setTimeout(function() {
					portfolio.classList.add('portfolio-active');						
				}, 10);				
			} else {
				portfolio.classList.add('portfolio-active');						
			}
		}
		//scrolling up
		if (e.deltaY < 0) {
			//if at the top of the portfolio
			if (portfolio.scrollTop == 0) {
				portfolio.style.height = '100%';
				portfolio.style.width = '100%';
				portfolio.style.borderRadius = '0';
				portfolio.classList.remove('portfolio-active');		
				setTimeout(function() {
					portfolio.classList.add('portfolio-inactive');
					portfolio.style.height = '52px';
					portfolio.style.width = '87%';
					portfolio.style.borderRadius = '15px 15px 0 0';
				}, 10)
			}
		}
	})

	//remove overflow before start of portfolio transition
	portfolio.addEventListener('animationstart', function() {
		if(portfolio.style.overflowY == 'scroll') {
			portfolio.style.overflowY = 'hidden';
		}
	})
	//add overflow after end of portfolio transition	
	portfolio.addEventListener('animationend', function() {
		if(portfolio.style.overflowY != 'scroll' && portfolio.classList.contains('portfolio-active')) {
			portfolio.style.overflowY = 'scroll';
		}
	})
})