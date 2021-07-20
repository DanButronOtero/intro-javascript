
const personajes=['batman','robbin','Flash'];
const [batman,robbin,flash] = personajes;

console.log(batman);
console.log(robbin);
console.log(flash);



const retornaArreglo=()=>['ABC',123];
const [letras,numeros]=retornaArreglo();
console.log(letras);
console.log(numeros);

const verEStado=(valor)=>{
    return [valor,()=>{console.log('Hola mundo')}];
};

const [nombre,setVar]= verEStado('Dan');
console.log(nombre);
setVar();