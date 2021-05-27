



(function(){
window.addEventListener('scroll',function(){
    this.document.getElementById("background").style.backgroundSize = 160 - + window.pageYOffset/20 + '%'});
}());





jQuery(document).ready(function(){
"use strict"
$('.exp').ripples({
    dropRadius:10,
    perturbance:0.01,
});
});




debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
	var $target = $('.animeCriative'),
			animationClass = 'anime-start',
			offset = $(window).height() * 1/4 ;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
            console.log(itemTop);
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();