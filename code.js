



	
	
	
	
	
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
				
				offset = $(window).height() * 1/6+100;
	
		function animeScroll() {
			var documentTop = $(document).scrollTop();
			
	
			$target.each(function(){
				var itemTop = $('.animeCriative').offset().top;
				
				if (documentTop > itemTop - offset) {
					$('.animeCriative').addClass('anime-start');
					setTimeout(function delay(){
					animeScroll2();
					},800)
				} else {
					
				}
			});
		}
		
			
		
		function animeScroll2(){
			
			$(".animeInovate").addClass('anime-start1');
			setTimeout(function delay(){
				animeScroll3();
				},800)
		}
		
		

		
		function animeScroll3(){
			$(".animeCuriosity").addClass('anime-start2');
			
		
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
			  duration: 3000,
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
			var createClock = setInterval(init, 2000);	
	function init(){
	var offset = $(window).height() * 1/6 ;
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
	
	
	






	(function(){
		var $target = $('.introAnime'),		
		offset = $(window).height() * 1/8;
		var createClock = setInterval(animeScroll4,2000);
	
		function animeScroll4() {
			var documentTop = $(document).scrollTop();
			
	
			$target.each(function(){
				var itemTop = $($target).offset().top;
				
				if (documentTop > itemTop - offset) {
					$($target).addClass('introAnimeStart');
					clearInterval(createClock);
				} 
			});

		}
	
	animeScroll4();	
	
	})();


	
	
	  
	
	

	  $('.git').addClass('boxToolsanime');
function changeTool(){
var toolNumber = Math.floor(Math.random() * 5);

if(toolNumber==0){
	$('.git').addClass('boxToolsanime');	
	
	$('.git1').removeClass('boxToolsanime');
	$('.git2').removeClass('boxToolsanime');
	$('.git3').removeClass('boxToolsanime');
	$('.git4').removeClass('boxToolsanime');
}
if(toolNumber==1){
	$('.git1').addClass('boxToolsanime');	
	$('.git').removeClass('boxToolsanime');
	$('.git2').removeClass('boxToolsanime');
	$('.git3').removeClass('boxToolsanime');
	$('.git4').removeClass('boxToolsanime');
}
if(toolNumber==2){
	$('.git2').addClass('boxToolsanime');
	$('.git1').removeClass('boxToolsanime');
	$('.git').removeClass('boxToolsanime');
	$('.git3').removeClass('boxToolsanime');
	$('.git4').removeClass('boxToolsanime');
}
if(toolNumber==3){
$('.git3').addClass('boxToolsanime');
$('.git1').removeClass('boxToolsanime');
$('.git2').removeClass('boxToolsanime');
$('.git').removeClass('boxToolsanime');
$('.git4').removeClass('boxToolsanime');
}
if(toolNumber==4){
	$('.git4').addClass('boxToolsanime');
	$('.git1').removeClass('boxToolsanime');
	$('.git2').removeClass('boxToolsanime');
	$('.git').removeClass('boxToolsanime');
	$('.git3').removeClass('boxToolsanime');
	

	}
}




