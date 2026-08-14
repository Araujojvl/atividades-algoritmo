// Validação da placa mercosul

// importar o pacote prompt-sync
prompt = require("prompt-sync")();

var entrada = prompt("Digite com a placa: ");

if(entrada.length == 7) {

    entrada = entrada.toUpperCase();
    var primeira = entrada.charCodeAt(0);
    var segunda = entrada.charCodeAt(1);
    var terceira = entrada.charCodeAt(2);
    var quarta = entrada.charCodeAt(3);
    var quinta = entrada.charCodeAt(4);
    var sexta = entrada.charCodeAt(5);
    var setima = entrada.charCodeAt(6);

    if( primeira >= 65 && primeira <= 90 &&
        segunda >= 65 && segunda <= 90 &&
        terceira >= 65 && terceira <= 90 &&
        quarta >= 48 && quarta <= 57 &&
        quinta >= 65 && quinta <= 90 &&
        sexta >= 48 && sexta <= 57 &&
        setima >= 48 && setima <= 57
    ) {

        console.log("Placa Válida");
        
    } else {

        console.log("Placa Inválida");

    }


} else {

    console.log("Placa Inválida");

}
