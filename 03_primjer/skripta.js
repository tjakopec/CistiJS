function filtriraj() {
   var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            povratnaFunkcija(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", "datoteka.txt", true);
    xmlhttp.send();
}

function povratnaFunkcija(vratioServer){
	var rezultati=JSON.parse(vratioServer);
	var ul = document.getElementById('podaci');
	while (ul.firstChild){
		ul.removeChild(ul.firstChild);
	} 
	var uvjet = document.getElementById("uvjet").value;
    uvjet = uvjet.trim().toLowerCase();
    var o;
    for(var i=0;i<rezultati.length;i++){
        o=rezultati[i];
        if (o.marka.trim().toLowerCase().indexOf(uvjet)>=0){
            dodajStavku(ul,o);
        }
    }
}

function dodajStavku(lista, objekt){
    var li = document.createElement("li");
	var naziv = document.createTextNode(objekt.marka + " (" + objekt.naziv + ")");
	li.appendChild(naziv);
	li.style.color=objekt.omiljenaBoja;
    lista.appendChild(li);
}


//inicijalno punjenje
filtriraj();
