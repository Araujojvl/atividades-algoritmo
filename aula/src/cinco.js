prompt = require("prompt-sync")();
// ler o teclado
entrada = prompt("Digite um numero: ");
// converter de string para numero
nro = Number(entrada);
// devolver par ou impar
if( nro %2 == 0 ) {
    console.log(`${nro} é par`);
} else {
    console.log(`${nro} é impar`);
}