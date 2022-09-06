import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';


buscarHeroe( heroeId1, ( error, heroe1 )=>{

    if(error){ return  console.log(error); }
    
    buscarHeroe(heroeId2, (error, heroe2) =>{
        if(error){ return  console.log(error); }

        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    });
});

