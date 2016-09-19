


$("#klik").click(function(){
	$("#pozdrav").html("Pozdrav svijetu");
});


$("table tbody tr td").click(function(){
	$(this).html("Zamjenio");
});


$(".lista").click(function(){
	$(this).append("<li>Dodao</li>");
});
