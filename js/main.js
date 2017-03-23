// Custom JS Script code here and jQuery plugins activation
$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		smartSpeed: 1500,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 1 
			}
		}
	});
});