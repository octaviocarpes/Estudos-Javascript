var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < pacientes.length; index++) {

    var paciente = pacientes[index];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    
    let peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc;
    
    var pesoEhValido = true;
    var alturaValida = true;
    
    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    
    
    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaValida){
        var imc = calculaIMC(peso,altura);
        tdImc.textContent = imc;
    }
    
}


function calculaIMC(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}


var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(){
    event.preventDefault();
    console.log("Fui clicado!");

});


