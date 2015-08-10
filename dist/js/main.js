$(document).ready(function() {
	$('.menu li a').click(function(){
	    var target = $(this).attr('data-target');
	    target = '#' + target;
	    $('html, body').animate({
	        scrollTop: $(target).offset().top}, 'slow');
	 });

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > 30) {
	        $('nav').addClass('nabvar-when-scroll');
	    } else {
	        $('nav').removeClass('nabvar-when-scroll');
	    }
	});
});