prompt = require("prompt-sync")();
// ler o teclado
entrada = prompt("entre com o numerador: ");
numerador = Number(entrada);
entrada = prompt("entre com o denominador: ");
denominador = Number(entrada);
// converter de string para numero
nro = Number(entrada);
// comparar o resto de numerador / denominador com zero
resto = numerador%denominador
if( resto == 0 ) {
    console.log(`${numerador} é multiplo de ${denominador}`);
} else {
    console.log(`${numerador} não é multiplo de ${denominador}`);
}