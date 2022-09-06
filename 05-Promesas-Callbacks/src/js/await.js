import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesId =['capi','iron','spider'];
const heroesPromesas = heroesId.map(id => buscarHeroe(id) );

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

export const heroesCiclo = async()=>{
    console.time('Heroes ciclo');

    for await ( const heroe of heroesPromesas){
        console.log(heroe);
    }

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));

    console.timeEnd('Heroes ciclo');
}

export const heroeIfAwait = async (id) =>{

    if( (await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('El mejor');
    }else{
        console.log('Naaah')
    }

}