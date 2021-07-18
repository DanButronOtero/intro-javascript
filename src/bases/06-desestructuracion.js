const persona={
    nombre:'Tony',
    edad:45,
    clave:'Ironman'
};

// const {edad,nombre,clave}=persona;

const returnPersona=({nombre,edad,clave})=>({
    nombreClave:clave,
    anios:edad,
    latlng:{
        lat:14.124,
        lng:-12.3232
    },
});
console.log(returnPersona(persona));
const {nombreClave,anios,latlng:{lat,lng}}=returnPersona(persona);
console.log(nombreClave,anios,lat,lng);
// console.log(nombre);

// console.log(edad);