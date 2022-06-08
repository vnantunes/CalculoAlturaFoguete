var elementoH = document.getElementById("h");
var elementoT = document.getElementById("t");
var elementoM = document.getElementById("m");
var btn = document.getElementById("btn");
var contador = 0;
var intervalo = '';

const MEDIDA_UM_PE_METRO = 0.3048;

var arrayH = [];
var arrayT = [];
var arrayAlturaEmMetros = [];

function converterPesEmMetros(pes) {
	return (pes * MEDIDA_UM_PE_METRO).toFixed(2);
}

function calcularAlturas() {
	for(var t=0;t<=15;t++) {
		var h = 3 * (t**2);
		var alturaEmMetros = converterPesEmMetros(h);
		arrayH.push(h);
		arrayT.push(t);
		arrayAlturaEmMetros.push(alturaEmMetros);
	}
}

function monitorarDados() {
	elementoH.innerHTML = arrayH[contador]; 
	elementoT.innerHTML = arrayT[contador];
	elementoM.innerHTML = arrayAlturaEmMetros[contador];
	
	contador++;

	if(contador == 16) {
		clearInterval(intervalo);
		contador = 0;
	}
}

btn.addEventListener("click", () => {
	intervalo = setInterval(monitorarDados,1000);
});

calcularAlturas();