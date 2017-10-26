$(function() {

	for (var lnk = document.links, j = 0; j < lnk.length; j++)
	if (lnk [j].href == document.URL)lnk [j].style.color = '#83D5D1'; 

	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		autoHeight: true,
		pagination: true,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: false,
		itemsMobile: false
	});

	$(".item").magnificPopup({
		type: 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

});



	


