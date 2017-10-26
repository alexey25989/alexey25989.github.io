$(function() {

		
	$(".menu__button").click(function() {
		$(this).next().slideToggle();
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$("a[href=#callback]").click(function() {
		$("#callback .formname").val($(this).data("form"));
	});

	$('#carouselOne').owlCarousel({
		loop:true,
      margin:50,
      nav:true,
      navText: ['<i class="fa fa-angle-left fa-3x"></i>', '<i class="fa fa-angle-right fa-3x"></i>'],
      dots:true,
      // autoplay:true,
      smartSpeed:1000, 
      autoplayTimeout:5000, 
      responsive:{ 
         0:{
            items:1                    
         }
      }
	});

	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	})
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	});

});



