$('.page-scroll').on('click', function() {
	
	var href = $(this).attr('href');

	var elHref = $(href);

	$('body').animate({
		scrollTop: elHref.offset().top
	}, 1260);
	
	e.preventDefault();
});