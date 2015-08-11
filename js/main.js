$(document).ready(function() {
	$('.menu li a').click(function(){
	    var target = $(this).attr('data-target');
	    target = '#' + target;
	    $('html, body').animate({
	        scrollTop: $(target).offset().top}, 'slow');
	 });
});