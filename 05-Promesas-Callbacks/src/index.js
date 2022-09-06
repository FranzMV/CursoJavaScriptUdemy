import {promesaLenta, promesaMedia, promesaRapida} from './js/promesas';


// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

//El promese.race te permite ejecutar todas las promesas en conjunto y objetner la respuesta de la que se resuelve mas rapido.

Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(console.log)//Se ejecutara la mas rapida
    .catch( console.warn );