import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesId =['capi','iron','spider'];

export const obtenerHeroesArr = async() =>{
    // const heroesArr = [];

    // for(const id of heroesId){
    //     heroesArr.push(buscarHeroe(id)); 
      
    // }
    
    // return await Promise.all( heroesArr );

    return await Promise.all(heroesId.map( buscarHeroe));
}