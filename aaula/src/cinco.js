let nros = [18, 14, 21, 15, 10, 18];
let i = 0;
let menor = nros[i]
while( i < nros.length ){
   if(menor > nros[i]){
      menor = nros[i];
   }
   i = i + 1;
}
console.log(`valor: ${menor}`)