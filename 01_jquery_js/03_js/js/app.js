// KORIŠTENJE document.getElementById

// 1. način onclick atribut elementa
function pozdravi(){
	document.getElementById("pozdrav").innerHTML="Pozdrav svijetu";
}


// 2. način addEventListener
document.getElementById("klik").addEventListener("click", pozdravi);

// 3. način inline funkcija
document.getElementById("klik").addEventListener("click", function(){
	document.getElementById("pozdrav").innerHTML="Pozdrav svijetu";
});


// KORIŠTENJE document.getElementsByTagName

var celije = document.getElementsByTagName("td");

for(var i=0;i<celije.length;i++){
	celije[i].addEventListener("click", function(){
		this.innerHTML="Promjena";
	});
}



// KORIŠTENJE document.getElementsByClassName

var liste = document.getElementsByClassName("lista");

for(var i=0;i<liste.length;i++){
	liste[i].addEventListener("click", function(){
		var stavka = document.createElement('li');
		stavka.appendChild(document.createTextNode("Dodao"));
		this.appendChild(stavka);
	});
}
