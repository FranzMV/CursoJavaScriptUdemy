let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length -1];
console.log({primero, ultimo});

//Bucle foreach
juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});

//Anyadir un nuevo elemento
let nuevaLogitud = juegos.push('F-Zero');
console.log({nuevaLogitud, juegos});

//Anyadir un elemento al principio
nuevaLogitud = juegos.unshift('Fire Emblem');
console.log({nuevaLogitud, juegos});

//Borrar el ultimo elemento
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

//Borrado un elemento cualquiera
let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 2);//arg 1: Posicion en la que empieza a borrar| arg2: Hasta que posicion borra
console.log({juegosBorrados, juegos});

//Posicion de un elemento de un array
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});
console.log(metroidIndex === -1? 'Juego no encontrado!' : 'Juego '+juegos[metroidIndex]+' encontrado!');

