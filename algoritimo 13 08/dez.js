// importar o pacote prompt-sync
prompt = require("prompt-sync")();

//  variavel  funcao     string
var entrada = prompt("Digite seu Nome: ");

var i = entrada.length -1;

// só pra separar professornão utilizou isso
console.log("------------------------");

// Faz o Inverso do nove
while(i >= 0) {

    console.log(`${i} = ${entrada[i]}`);
    i = i- 1;

}

console.log("Fim!!!");
