window.addEventListener('DOMContentLoaded', function(event) {
	'use strict';

	let isInViewport = function(elem) {
		const bounding = elem.getBoundingClientRect();
		return (
			bounding.top >= 0 &&
			bounding.left >= 0 &&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
			bounding.left <= (window.innerHeight || document.documentElement.clientHeight)
		)
	}

	const container = document.querySelector('.container');
	container.addEventListener('scroll', function() {
		if(isInViewport(?????)) {
			//is in the viewport
		} else {
			//not in the viewport
		}
	})
})