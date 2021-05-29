




(function(){
window.addEventListener('scroll',function(){
    this.document.getElementById("background").style.backgroundSize = 160 - + window.pageYOffset/40 + '%'});
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
			offset = $(window).height() * 1/8 ;

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		

		$target.each(function(){
			var itemTop = $(this).offset().top;
            
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

  function scrollwhere() {
	  
	$('.skill-per').each(function(){
		var $this = $(this);
		var per = $this.attr('per');
		$this.css("width",per+'%');
		$({animatedValue: 0}).animate({animatedValue: per},{
		  duration: 4000,
		  step: function(){
			$this.attr('per', Math.floor(this.animatedValue) + '%');
		  },
		  complete: function(){
			$this.attr('per', Math.floor(this.animatedValue) + '%');
		  }
		});
	  });
	
	}	

//desenrolei aq slk keepo//
	(function(){
		var createClock = setInterval(init, 3000);	
function init(){
var offset = $(window).height() * 1/4 + 100;
console.log(offset + '  offset');
var scrollwhereV =$(document).scrollTop();
console.log(scrollwhereV + 'scroll');



if(scrollwhereV>offset){
		scrollwhere();
		console.log("STOP INTERVAL EXECUTED");
		clearInterval(createClock);
		
}
}
init();
})();

/*frase animmation*/



	function escurecer(){
		$("#frase").fadeOut();
	}

	escurecer();
