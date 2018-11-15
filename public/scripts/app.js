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
	const content = document.querySelector('.content');
	const simplebarContent = document.querySelector('.simplebar-content');

	container.addEventListener('wheel', function(e) {
		console.log(portfolio.scrollTop);
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
			if (simplebarContent.scrollTop == 0) {
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
})