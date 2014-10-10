var peso = document.getElementsById("peso-1").textContent;
var altura = document.getElementsById("altura-1").textContent;
var nome = document.getElementsById("nome-1").textContent;

var paciente = {peso : peso, altura : altura, nome : nome}

if (paciente.altura != 0) {
var imc = paciente.peso / (paciente.altura * paciente.altura); // 25

console.log(imc); 
} else{
	console.log("Nao executei porque altura eh igual a zero"
} 