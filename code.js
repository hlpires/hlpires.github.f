




window.addEventListener('scroll',function(){
    this.document.getElementById("background").style.backgroundSize = 160 - + window.pageYOffset/20 + '%'});

jQuery(document).ready(function(){
"use strict"
$('.exp').ripples({
    dropRadius:10,
    perturbance:0.01,
});
});