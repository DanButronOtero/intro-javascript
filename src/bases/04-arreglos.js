const arreglo= [1,2,3,4];
// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);
let arreglo2=[...arreglo,5];
let arreglo3= arreglo2.map((value)=>value*2);
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);