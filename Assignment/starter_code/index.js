$(document).ready(function(){
// It's really important that you tab things in because your parenthesis and brackets were off which is why the code wasn't loading
	$('.readless').hide();
	$('.readmore').click(showReadMore);

	function showReadMore(){
		event.preventDefault();
		$('#show-this-on-click').slideDown();
		// The a tags don't work here because the a tag is inside the p tag with the class you want to act
		$('.readmore').hide();
		$('.readless').show();
		console.log("showReadMore");
	}

	$('a.readless').click(hideShowThisOnClick);

	function hideShowThisOnClick(){
		event.preventDefault();
		$('#show-this-on-click').slideUp();
		$('.readless').hide();
		$('.readmore').show();
	}

	$('a.learnmore').click(learnMore);

	function learnMore(){
		event.preventDefault();
		$('#learnmoretext').slideDown();
		$('a.learnmore').hide();
	}

});