import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';


// buscarHeroe( heroeId1, ( error, heroe1 )=>{

//     if(error){ return  console.log(error); }
    
//     buscarHeroe(heroeId2, (error, heroe2) =>{
//         if(error){ return  console.log(error); }

//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });
// });


// buscarHeroe(heroeId1).then( heroe1 => {
//     //console.log(`Enviando a ${heroe.nombre} a la mision`);
//     buscarHeroe(heroeId2).then( heroe2 =>{
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     })
// });


//Ejecutar promesas en paralelo
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then( ([heroe1, heroe2]) =>{
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
});

console.log('Fin del programa');