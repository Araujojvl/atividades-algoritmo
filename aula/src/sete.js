prompt = require("prompt-sync")();

var entrada = prompt("digite o numero de inicio: ");

var inicio = Number(entrada);

var entrada = prompt("Digite o numero de final: ");

var final = Number(entrada);

while(inicio <= final) {
    console.log(inicio);
    inicio= inicio + 1;
}
console.log(final)