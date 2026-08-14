// importar o pacote prompt-sync
prompt = require("prompt-sync")();

//  variavel  funcao     string
var entrada = prompt("Digite seu Nome: ");

var i = 0;

// só pra separar professornão utilizou isso
console.log("------------------------");

while(i < entrada.length) {

    console.log(`${i} = ${entrada[i]}`);
    i = i+ 1;
}

console.log("Fim!!!");
