const saludar= (nombre)=> `Hola ${nombre}`;
const getUser=(nombre)=>({uid:'ABC8097',
                    username:nombre});
console.log(getUser('test'));
console.log(saludar('Dan'));