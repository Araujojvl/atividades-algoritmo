prompt = require("prompt-sync")();
// ler o teclado
entrada = prompt("Entre com a sua idade: ");
// converter de string para numero
idade = Number(entrada);
// checar se idade menor que 18
if( idade <18 ) {
    console.log("de menor");
} else {
    console.log("de maior");
}