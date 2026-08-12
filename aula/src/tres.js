prompt = require("prompt-sync")();

entrada = prompt("Entre com a sua idade: ");
nro = parseInt(entrada);
nro = nro + 1;
console.log(`idade: ${nro}`);