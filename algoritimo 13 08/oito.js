// modificou o sete.js

// importar o pacote prompt-sync
prompt = require("prompt-sync")();

//  variavel  funcao     string
var entrada = prompt("Digite o Inicio: ");

var inicio = Number(entrada);

var entrada = prompt("Digite o Fim: ");

var fim = Number(entrada);

if(inicio > fim) {

    var temp = inicio;
    inicio = fim;
    fim = temp;

}

console.log(`Inicío ${inicio} até o Fim ${fim} acabou!!`);
