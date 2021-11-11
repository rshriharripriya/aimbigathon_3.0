(function($) { "use strict";

	//Preloader

	$(window).on('load', function(e) { // makes sure the whole site is loaded
		$(".loader__figure").fadeOut(); // will first fade out the loading animation
		$(".loader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
	})


	/*! Popover */

	$('a.ticket-link').webuiPopover({
		url:'#ticket-wrap',
		width: 300,
		animation: 'pop',
		arrow: true
	});


	$(document).ready(function() {

		/*! Nicescroll */

		$("#boxscroll-1").niceScroll("#boxscroll-in-1",{
			cursorcolor:"#000",
			cursoropacitymax:0.5,
			cursorwidth: "6px",
			cursorborder: "0px solid #fff",
			dblclickzoom: false,
			scrollspeed: 60,
			mousescrollstep: 60,
			autohidemode: false,
			bouncescroll: false,
			railpadding: { top: 20, right: 5, left: 0, bottom: 20 }
		});
		$("#boxscroll-2").niceScroll("#boxscroll-in-2",{
			cursorcolor:"#000",
			cursoropacitymax:0.5,
			cursorwidth: "6px",
			cursorborder: "0px solid #fff",
			dblclickzoom: false,
			scrollspeed: 60,
			mousescrollstep: 60,
			autohidemode: false,
			bouncescroll: false,
			railpadding: { top: 20, right: 5, left: 0, bottom: 20 }
		});
		$("#boxscroll-3").niceScroll("#boxscroll-in-3",{
			cursorcolor:"#000",
			cursoropacitymax:0.5,
			cursorwidth: "6px",
			cursorborder: "0px solid #fff",
			dblclickzoom: false,
			scrollspeed: 60,
			mousescrollstep: 60,
			autohidemode: false,
			bouncescroll: false,
			railpadding: { top: 20, right: 5, left: 0, bottom: 20 }
		});
		$("#boxscroll-4").niceScroll("#boxscroll-in-4",{
			cursorcolor:"#000",
			cursoropacitymax:0.5,
			cursorwidth: "6px",
			cursorborder: "0px solid #fff",
			dblclickzoom: false,
			scrollspeed: 60,
			mousescrollstep: 60,
			autohidemode: false,
			bouncescroll: false,
			railpadding: { top: 20, right: 5, left: 0, bottom: 20 }
		});
		$("#boxscroll-5").niceScroll("#boxscroll-in-5",{
			cursorcolor:"#000",
			cursoropacitymax:0.5,
			cursorwidth: "6px",
			cursorborder: "0px solid #fff",
			dblclickzoom: false,
			scrollspeed: 60,
			mousescrollstep: 60,
			autohidemode: false,
			bouncescroll: false,
			railpadding: { top: 20, right: 5, left: 0, bottom: 20 }
		});


		//Countdown

        $('.countdown').downCount({
            date: '11/29/2021 10:00:00'
        }, function () {
            alert('Oops registration is over');
        });


		//Animated Icons

		var options = {
		  duration: 150,
		  type: 'oneByOne',
		  animTimingFunction: Vivus.EASE
		};

		var vivus = new Vivus('svg-ticket',	options, onComplete);

		function onComplete() {}

	});

})(jQuery);
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
window.onload= function () {
 setInterval(function(){
     plusSlides(1);
 }, 3000);
 }
