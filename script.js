$(document).ready(function(){
	// $(window).load(function(){
		$(function(){
		  	$('.sidebar img').on('click',function(){
		  		$('.selected').removeClass('selected');
		    	$(this).toggleClass('selected');
		  	});
		 	 $('.large img').on('click',function(){
		    	$('.modal').removeClass('modal');
		    	$(this).toggleClass('modal');
		  	});
		});
	// });
});


