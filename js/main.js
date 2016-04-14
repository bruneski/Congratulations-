
$(document).ready(function() {

	$('.trailer-link').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
	});
	// document.onload = function() {
	// 	// $('body').css('background-image', 'url('../img/alt-desktop-splash.jpg') no-repeat center');
	// 	$('body').css("background-image", "url('../congratsmovie/img/alt-desktop-splash.jpg')");
	// 	$('body').css("background-repeat", "no-repeat"); 
	// 	$('body').css("background-position", "center')");

	// }

	(function() {
	    var elm = $('body'),
	        url = '../congratsmovie/img/alt-desktop-splash.jpg';
	    var tmp = new Image();
	    tmp.onload = function() {
			elm.css("background-image", "url('"+url+"')");
			elm.css("background-repeat", "no-repeat"); 
			elm.css("background-position", "center')");
	    };
	    tmp.src = url;
	})();
	
});