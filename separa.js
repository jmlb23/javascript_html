//javascript como calquer linguaxe de programacion ten statements que se poden poñer nunha mesma liña ou non mediante punto e coma
//temos os boolean

var v = true;

//temos os numericos

var num = 5;

//temos os strings que permiten o uso de "" ou '' indistintamente

var s = 'valor';

//temos os obxetos

var o = new Object();

//var ten a aplicacion de que crea unha variable no ambito actual se non poñemos var e hai outra variable co mesmo nome usaremos a do ambito superior
//javascript ten tipado dinamico e debil
//dinamico porque non fai falla declarar as variables ainda que se pode con var
//debil porque en canto a uso de tipos non é estricto esto é unha variable unha vez creada pode conter calquer tipo de dato
//non queda ligada a declaracion o tipo

var glo = 5;

function proba(){
	//glo++;
	//unha vez que definimos outra variable no ambito temos que usar o obxeto window para para referirnos a ela
	//definimos un atributo de window
	//detecta que hai definida unha neste ambito pero como se é secuencial a lectura????
	
	alert(glo);
	var glo = 4;
	alert(glo);
	
}

proba();
