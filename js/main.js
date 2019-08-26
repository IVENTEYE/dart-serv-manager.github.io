$(function () {
	$('.spoiler-body').hide(300);
	$(document).on('click','.spoiler-head','.drop-down',function (e) {
		e.preventDefault()
		$(this).parents('.spoiler-card').toggleClass("active").find('.spoiler-body').slideToggle();
	});
});

jQuery(function($){
	$(document).ready(function(){
		$('.bxslider').bxSlider({
			mode: 'vertical',
			minSlides: 2,
			slideMargin: 5,
			controls: true,
			nextText: ['<img src="img/down.png"/>'],
			prevText: ['<img src="img/up.png"/>'],
		});
	});
});

$('.menu-btn').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('menu-btn__active');
	$('.nav-menu').toggleClass('nav-menu__active');
})