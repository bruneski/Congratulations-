
$(document).ready(function() {

	$('.trailer-link').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
	});

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