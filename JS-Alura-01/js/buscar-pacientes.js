var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            adicionaPacientesNaTabela(paciente);
        }
    });
    xhr.send();
});