




window.addEventListener('scroll',function(){
    this.document.getElementById("background").style.backgroundSize = 160 - + window.pageYOffset/15 + '%'});

var $target = $('anime'),
    animationClass='anime-start'

    function animeScroll(){
        var documentTop = $(document).scrollTop();
        $target.each(function(){
            var itemTop = $(this).offset().top;
            if(documentTop> itemTop){
                $(this).addClass(animationClass);
            }else{
                $(this).removeClass(animationClass);
            }
        })
    }
    animeScroll();