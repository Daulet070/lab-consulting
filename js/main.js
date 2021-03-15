$(function(){
	//Menu opener hamburger
	$('.menu-open').click(function () {
		$('.menu-collapse').toggleClass('d-none').css('order','1');
		$('.menu').toggleClass('menu-opend')
	})
	//Onened modal window
	$('.nav__btn, .footer-cell__btn').click(function (e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	})
	$("#navToggle").click(function() {
	    $(this).toggleClass("active");
	    $(".overlay").toggleClass("open");
	    // this line ▼ prevents content scroll-behind
	    $("body").toggleClass("locked"); 
	});
});