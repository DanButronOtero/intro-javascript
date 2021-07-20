import {getHeroeById} from './bases/08-imp-exp'

const getHeroeByIdAsync=(id)=>{
    return   new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            heroe?resolve(heroe):reject('id no encontrado');
        }, 2000);
        
    });
};
getHeroeByIdAsync(100)
    .then((heroe)=>{console.log(heroe);})
    .catch((err)=>{console.warn(err);});