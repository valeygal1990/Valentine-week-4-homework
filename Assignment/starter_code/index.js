$(document).ready(function())

$('a.readless').hide();
$('a.readmore').click(showReadMore);

function showReadMore(){
	event.preventDefault();
	$('#show-this-on-click').slideDown();
	$('a.readmore').hide();
	$('a.readless').show();
}

$('a.readless').click(hideShowThisOnClick);

function hideShowThisOnClick(){
	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('a.readless').hide();
	$('a.readmore').show();
}

$('a.learnmore').click(learnMore);

function learnMore(){
	event.preventDefault();
	$('#learnmoretext').slideDown();
	$('a.learnmore').hide();
}



(};
