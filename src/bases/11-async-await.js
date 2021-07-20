// const getImagenPromesa=()=>{
//     const promesa = new Promise((resolve, reject) => {
//         resolve('http://')
//     });
// }

// import {api_key} from '../data/keys';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
// console.log(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
// peticion
//     .then((resp)=>resp.json())
//     .then(({data})=>{
//         const {url} =data.images.original;
//         const img = document.createElement('img');
//         img.src=url;
//         document.body.append(img);
//     })
//     .catch(err=>console.warn(err));


const getImage= async()=>{
    const api_key='';
    const resp= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
    const {data} = await resp.json();
    
    const {url} =data.images.original;
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);
}



getImage();