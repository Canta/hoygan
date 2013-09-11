/* jQuery extension: hoygan. */

jQuery.hoygan = function(str, rnd){
	texto = str;
	rnd = (rnd === undefined) ? true : rnd;
	rnd = Boolean(rnd);
	
	semirand = function(multiplo, min){
		multiplo = (multiplo === undefined) ? 100 : multiplo;
		min = (min === undefined) ? 1 : min;
		return (rnd === true) ? 
			parseInt(Math.random() * multiplo + min) : 
			parseInt(texto.length / multiplo + min) ;
	}
	
	
	
	// CRITERIOS
	// 1) Mayúsculas
	texto = texto.toUpperCase();
	tmp1 = texto.split(" ");
	for (var i = 0; i < tmp1.length; i++){
		palabra = tmp1[i];
		for (var i2 = 0; i2 < palabra.length; i2++){
			inicial = (i2 == 0) ? palabra.charAt(0) : "";
			// 2) Las palabras que empiecen con vocal, tienen un 40% de pasar a empezar con H
			if (inicial == "A" || inicial == "E" || inicial == "I" || inicial == "O" || inicial == "U"){
				if (semirand() > 60){
					palabra = "H" + palabra;
				} 
			}
			
			letra = palabra.charAt(i2);
			//3) Hay un 12% de chances de que las letras se cambien de lugar
			if (semirand() < 12){
				inicio  = palabra.substr(0,i2);
				fin		= palabra.substr(i2+1,palabra.length-i2);
				palabra = inicio.substr(0, inicio.length -1) + letra + inicio.charAt(inicio.length-1) + fin;
			}
			
		}
		
		//4) "por" se reemplaza por "x". 50% chances
		if (semirand() > 50){
			palabra.replace("POR","X");
		}
		
		//5) "que" se reemplaza por "k". 50% chances
		if (semirand() > 50){
			palabra.replace("QUE","K");
			palabra.replace("QUÉ","K");
			palabra.replace("QUI","KI");
		}
		
		//6) "c" se reemplaza por "k". 50% chances
		if (semirand() > 50){
			palabra.replace("CA","KA");
			palabra.replace("CU","KU");
		}
		
		//7) Se agrega "jajaja", con extensión arbitraria entre 4 y 10 caracteres, con 4% chances
		if (semirand() > 96){
			extension = semirand(10,4);
			if (extension > 10) { extension = 10; }
			palabra += " ";
			for (var i2 = 0; i2 < extension; i2++){
				palabra += (i2 % 2 == 0) ? "J" : "A";
			}
		}
		
		tmp1[i] = palabra;
	}
	texto = tmp1.join(" ");
	
	//8) se agrega la palabra HOYGAN al comienzo. 75% chances.
	if (semirand() > 25){
		texto = "HOYGAN " + texto;
	}
	
	//9) se agrega la palabra URGENTE al comienzo. 5% chances.
	if (semirand() > 95){
		texto = "URGENTE " + texto;
	}
	
	
	//10) entre una y 10 letras NO están en mayúsculas;
	cuantas = semirand(10);
	for (var i = 0; i < cuantas; i++){
		i2 = parseInt(Math.random() * texto.length + 1);
		if (i2 > texto.length - 1) { i2 = texto.length -1; }
		letra  = texto.charAt(i2).toLowerCase();
		inicio = texto.substr(0,i2);
		fin	= texto.substr(i2+1,texto.length-i2);
		texto  = inicio + letra + fin;
	}
	
	//11) Se agrega epígrafe, con 10% de chances
	if (semirand() > 90){
		texto += $.hoygan.epigrafe();
	}
	
	//12) Signos de puntuación se exageran
	cuantas = semirand(10);
	ex = "";
	for (var i = 0; i < cuantas; i++){
		ex += "!"
	}
	texto.replace(".",ex);
	
	cuantas = semirand(10);
	inte = "";
	for (var i = 0; i < cuantas; i++){
		inte += (i % parseInt(Math.random() + 2 ) == 0)? "!" : "?";
	}
	texto.replace("?",inte);
	
	//13) se agregan exclamaciones al azar al final de la expresión, con 10% chances
	if (semirand() > 90){
		cuantas = semirand(25);
		inte = "";
		for (var i = 0; i < cuantas; i++){
			inte += (i % parseInt(Math.random() * 5 ) == 0)? "?" : "!";
		}
		texto += inte;
	}
	
	return texto;
}

jQuery.hoygan.epigrafe = function(){
	devolver = "";
	tmp = parseInt(Math.random() * 10 + 1);
	if (tmp == 1){
		devolver = " GRASIES DE ANTEBRASO";
	}
	if (tmp == 2){
		devolver = " GRASIAS DE ANTEMANO";
	}
	if (tmp == 3){
		devolver = " GRACIES DE ENTREPIERNA";
	}
	if (tmp == 4){
		devolver = " GRASAS DE MANO PERSON POR LAS MOLESTIAS";
	}
	if (tmp == 5){
		devolver = " PERSDON X LAS MOILESRIA";
	}
	if (tmp == 6){
		devolver = " GRASIA PERDONM";
	}
	if (tmp == 7){
		devolver = " PERDOM GRAISAS";
	}
	if (tmp == 8){
		devolver = " GROSAS DE NADA";
	}
	if (tmp == 9){
		devolver = " PERDON POR LAS DISCULPAS";
	}
	if (tmp == 10){
		devolver = " GRASIAS ASTA LUEBO";
	}
	return devolver;
}

