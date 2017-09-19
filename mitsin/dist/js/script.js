$(document).ready(function(){

$(".navbar").removeClass("default");
$(window).scroll(function(){
	if ($(this).scrollTop()>30) {
		$(".navbar").addClass("default").fadeIn('fast');

	}
	else{
		$(".navbar").removeClass("default").fadeIn('fast');
	};

});


});
