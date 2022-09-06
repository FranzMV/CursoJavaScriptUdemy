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


export const buscarHeroe = ( id ) => {
    const heroe = heroes[id];
    

    return new Promise(( resolve, reject )=>{
        if(heroe){
            resolve( heroe );
        }else{
            reject(`No existe un heroe con el id ${id}`);
        }
    });
}

const promesaLenta = new Promise( (resolve, reject)=> {
    setTimeout(()=> resolve('Promesa lenta'), 2000);
});

const promesaMedia = new Promise( (resolve, reject)=> {
    setTimeout(()=> reject('Promesa media'), 1500);
});

const promesaRapida = new Promise( (resolve, reject)=> {
    setTimeout(()=> reject('Promesa rapida'), 1000);
});

export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}