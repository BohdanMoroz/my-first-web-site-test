$(document).ready(function(){
	var $menu = $("#boolet__img--1");
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 650 && $menu.attr("src", "./img/empty.png") ){
			$menu.attr("src", "./img/full.png")
			// $menu.removeClass("header--default").addClass("header--fixed");
		// } else if($(this).scrollTop() <= 650 && $menu.hasClass("header--fixed")) {
		// 	$menu.removeClass("header--fixed").addClass("header--default");
		}
	});//scroll
});
