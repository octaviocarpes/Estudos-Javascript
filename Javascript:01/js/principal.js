var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

let peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

var pesoEhValido = true;
var alturaValida = true;

if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}


if(altura <= 0 || altura >= 3.0){
    tdImc.textContent = "Altura inválida!";
    console.log("Altura inválida");
    alturaValida = false;
}

if(pesoEhValido && alturaValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

console.log(peso);
console.log(pesoEhValido);

if(peso  < 0){
    console.log(peso);
}

if(peso  > 1000){
    console.log(peso);
}