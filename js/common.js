$(function () {

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();


		// Fixed HEader
	checkScroll(scrollOffset);

	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});
	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	// Smooth scroll
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		var $this = $(this),
			blockID = $this.data('scroll'),
			blockOffset = $(blockID).offset().top;

		$("#nav a").removeClass("activet");
		$this.addClass("activet");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});

	// Menu nav toggle
	$("#nav_toggle").on("click", function(event){
		event.preventDefault();

		$("#nav, #nav_toggle").toggleClass("active");
		console.log("#click")
	});

// Collapse

$("[data-collapse]").on("click", function(event) {
	event.preventDefault();

	var $this = $(this),
		blockID = $this.data('collapse');
	
	$(blockID).slideToggle();
});

// Slider

$("[data-slider]").slick({
	infinite: true,
	fade: false, 
	slidesToShow: 1,
	slidesToScroll: 1
});





});
