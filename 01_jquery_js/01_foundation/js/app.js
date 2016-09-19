$(document).foundation();


$("#klik").click(function(){
	$("#nestaje").fadeOut();
});


$("table tbody tr td").click(function(){
	$(this).html("Zamjenio");
});


$(".lista").click(function(){
	$(this).append("<li>Dodao</li>");
});
