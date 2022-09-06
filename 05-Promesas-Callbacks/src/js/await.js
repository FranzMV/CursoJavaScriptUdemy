import { buscarHeroeAsync } from "./promesas";

const heroesId =['capi','iron','spider'];

export const obtenerHeroesArr = async() =>{
    const heroesArr = [];

    for(const id of heroesId){
        const heroe = await buscarHeroeAsync(id); //Cuando se resuelve esta promesa se guarda en la constante heroe
        heroesArr.push(heroe);
    }
    

    return heroesArr;
}