
	


	const menuItems = document.querySelectorAll('.menu a[href^="#"]');

	function getScrollTopByHref(element) {
		const id = element.getAttribute('href');
		return document.querySelector(id).offsetTop;
	}
	
	function scrollToPosition(to) {
	 
	  smoothScrollTo(0, to);
	}

	function scrollToIdOnClick(event) {
		event.preventDefault();
		const to = getScrollTopByHref(event.currentTarget)+ 88;
		scrollToPosition(to);
	}
	
	menuItems.forEach(item => {
		item.addEventListener('click', scrollToIdOnClick);
	});
	

	function smoothScrollTo(endX, endY, duration) {
	  const startX = window.scrollX || window.pageXOffset;
	  const startY = window.scrollY || window.pageYOffset;
	  const distanceX = endX - startX;
	  const distanceY = endY - startY;
	  const startTime = new Date().getTime();
	
	  duration = typeof duration !== 'undefined' ? duration : 400;
	
	  
	  const easeInOutQuart = (time, from, distance, duration) => {
		if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
		return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
	  };
	
	  const timer = setInterval(() => {
		const time = new Date().getTime() - startTime;
		const newX = easeInOutQuart(time, startX, distanceX, duration);
		const newY = easeInOutQuart(time, startY, distanceY, duration);
		if (time >= duration) {
		  clearInterval(timer);
		}
		window.scroll(newX, newY);
	  }, 1000 / 60); // 60 fps
	};
	








	
	
	
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
		(function(){
			var createClock = setInterval(init, 2000);	
	function init(){
	var offset = $(window).height() * 1/6 ;
	console.log(offset + '  offset');
	var scrollwhereV =$(document).scrollTop();
	console.log(scrollwhereV + 'scroll');
	
	
	





//COPIA NAO COMEDIA

	if(scrollwhereV>offset){
			scrollwhere();
			console.log("STOP INTERVAL EXECUTED");
			clearInterval(createClock);
			(setTimeout(function boxes() {
				$('.mask').each(function(){
					var $this = $(this);
					var per = $this.attr('per');
					$this.css("height",per+'%');
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
				
			  }, 1000));

			  (setTimeout(function boxes() {
				$('.mask1').each(function(){
					var $this = $(this);
					var per = $this.attr('per');
					$this.css("height",per+'%');
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
				
			  }, 1100));

			  (setTimeout(function boxes() {
				$('.mask2').each(function(){
					var $this = $(this);
					var per = $this.attr('per');
					$this.css("height",per+'%');
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
				
			  }, 1200));


			  (setTimeout(function boxes() {
				$('.mask').each(function(){
					var $this = $(this);
					var per = 87.8;
					$this.css("height",per+'%');
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
				
			  }, 1300));

			  (setTimeout(function boxes() {
				$('.mask1').each(function(){
					var $this = $(this);
					var per = 87.8;
					$this.css("height",per+'%');
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
				
			  }, 1400));

			  (setTimeout(function boxes() {
				$('.mask2').each(function(){
					var $this = $(this);
					var per = 87.8;
					$this.css("height",per+'%');
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
				
			  }, 1500));

			  (setTimeout(function boxes() {
				$('.mask').each(function(){
					var $this = $(this);
					var per = 0;
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
				
			  }, 1600));

			  (setTimeout(function boxes() {
				$('.mask1').each(function(){
					var $this = $(this);
					var per = 0;
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
				
			  }, 1700));

			  (setTimeout(function boxes() {
				$('.mask2').each(function(){
					var $this = $(this);
					var per = 0;
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
				
			  }, 1800));

			  
			 
			  
	}
	}
	init();
	})();
	

	






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


	


function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
  }
  
  