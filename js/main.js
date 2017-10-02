/*global $, jQuery*/

jQuery(document).ready(function ($) {

	// Open and close the burger menu
	$('.hamburger, .btn-close').on('click', function(){
		$(this).toggleClass('opened');
		$('nav').toggleClass('open');
		$('body, html').toggleClass('is-noscroll');
	})

});
