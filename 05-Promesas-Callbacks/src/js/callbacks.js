const heroes = {
    capi:{
        nombre:'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre:'Ironman',
        poder: 'Abasurda cantidad de dinero'
    },
    spider:{
        nombre:'Spiderman',
        poder: 'La mejor reaccion alergica a las picadores de araña'
    },
}


export const buscarHeroe = (id, callback) =>{
    const heroe = heroes[id];
    
    if(heroe){
        callback(null, heroe);
    }else{
    
        callback(`No existe un heroe con el id ${id}`);
    }
    
}