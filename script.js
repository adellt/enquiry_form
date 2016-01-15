$(document).ready(function() {
	$(".tab-headings li").on("click", function(event) {
		var tab_id = $(this).find("a").attr("href");
		$(".tab-headings li").removeClass("active");
		$(".tab").removeClass("active");
		$(this).addClass("active");
		$(tab_id).addClass("active");
		event.preventDefault();
	});
});