import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesId =['capi','iron','spider'];

export const obtenerHeroesArr = async() =>{
    // const heroesArr = [];

    // for(const id of heroesId){
    //     heroesArr.push(buscarHeroe(id)); 
      
    // }
    
    // return await Promise.all( heroesArr );

    return await Promise.all(heroesId.map( buscarHeroe));
};

export const obtenerHeroeAwait = async (id) =>{

    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;
    } catch (err) {
        console.log('Catch!!!');
        return{
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }
}