let nros = [18, 14, 21, 15, 10, 18];
let i = 0;
let maior = nros[i]
while( i < nros.length ){
   if(maior < nros[i]){
      maior = nros[i];
   }
   i = i + 1;
}
console.log(`valor: ${maior}`)
