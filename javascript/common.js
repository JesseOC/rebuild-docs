$(document).on('ready', function() {
	$('#menu .parent').on('click', function(e) {
		e.preventDefault();
		
		$(this).parent().slideToggle(400, function() {
			
		});
	});
});