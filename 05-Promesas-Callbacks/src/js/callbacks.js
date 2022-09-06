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
    
    callback(heroe);
}