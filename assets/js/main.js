/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Sticky Header Js
03. Sticky Header 3 Js
04. Meanmenu Js
05. One Page Nav Js
06. Off canvas menu Js
07. scrollToTop Js
08. Data-Background Js
09. testimonial Slider Js
10. testimonial Slider home 3 Js
11. Portfolio Filter Js
12. Portfolio Slider Js
13. WOW active Js
****************************************************/
(function ($) {
"use strict";

// 01. Preloader Js
$(window).on('load', function () {
	$("#status").fadeOut();
	// will fade out the whole DIV that covers the website.
	$("#preloader").delay(1000).fadeOut("slow");
});

// 02. Sticky Header Js
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 100){
		$('#header').addClass("sticky");
	} 
	else {
		$('#header').removeClass("sticky");
	}
});

// 03. Sticky Header 3 Js
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 100){
		$('#header3').addClass("sticky3");
	} 
	else {
		$('#header3').removeClass("sticky3");
	}
});

// 04. meanmenu Js
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

// 05. One Page Nav Js
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});

// 06. Off canvas menu Js
$("#canvas_menu").on('click', function(){
    $(".off-canvas-content").addClass("show-canvas");
});
$(".close-canvas, #close_canvas_bg").on('click', function(){
    $(".off-canvas-content").removeClass("show-canvas");
});

// 07. scrollToTop Js
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fal fa-chevron-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// 08. Data-Background Js
$("[data-background").each(function () {
	$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
});

// 09. testimonial Slider Js
$('.testimonial-content').slick({
	infinite: true,
	slidesToShow: 2,
	prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
	responsive: [
		{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true
		}
		},
		{
		breakpoint: 575,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

// 10. testimonial Slider home 3 Js
$('.testimonial-content-3').slick({
	infinite: true,
	slidesToShow: 1,
	prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
	responsive: [
		{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true
		}
		},
		{
		breakpoint: 575,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});


// 11. Portfolio Filter Js
$('.portfolio').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.portfolio').isotope({
	itemSelector: '.single-port',
	percentPosition: true,
	originLeft: false,
	masonry: {
		columnWidth: 1,
	}
	});

	 // filter items on button click
	$('.portfolio-menu').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});

// 12. Portfolio Slider Js
$('.portfolio-2').slick({
	infinite: true,
	slidesToShow: 2,
	rows: 2,
	prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
	responsive: [
		{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true
			}
		},
		{
		breakpoint: 575,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			rows: 1,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
		event.preventDefault();
});

// 13. WOW active Js
new WOW().init();

})(jQuery);