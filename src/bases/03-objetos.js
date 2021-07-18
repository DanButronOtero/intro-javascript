const persona={
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'Ney York',
        zip:593890,
        lat:14.50980,
        lng:43.43252,
    },
}
console.table(persona);
const persona2={...persona};
console.log(persona2);

persona2.nombre='Peter';
console.log(persona2);
console.log(persona);