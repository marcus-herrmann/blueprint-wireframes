$(function() {
	$(".hint").easyModal();

	$(".close-trigger").on("click", function() {
		$(this).parents(".hint").trigger('closeModal');
	});

	$(".hint-trigger").on('click', function(){
		var modal = "." + $(this).data("opens");
		$(modal).trigger("openModal");
	});
});