$(document).ready(function() {

	$('.trailer-link').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
	});

	var header-img-url = $('.header').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '');
	
});