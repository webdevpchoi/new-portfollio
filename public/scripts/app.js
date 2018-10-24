const testBtn = document.querySelector('.test-btn');
const curtainContainer = document.querySelector('.curtain-container');
const curtain = document.querySelector('.curtain');
const portfolio = document.querySelector('.portfolio');
//test button
testBtn.addEventListener('click', function() {
	alert('this works!');
})

//helper function
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
