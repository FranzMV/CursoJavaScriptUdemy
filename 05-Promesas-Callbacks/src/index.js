import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId = 'capi';


buscarHeroe( heroeId, ( error, heroe )=>{

    if(error){
        console.log(error)
    }else{
        console.info(heroe);
    }
});

