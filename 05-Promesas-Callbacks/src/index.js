import {buscarHeroe, buscarHeroeAsync} from './js/promesas';
import { heroesCiclo, heroeIfAwait } from './js/await';


// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

//El promese.race te permite ejecutar todas las promesas en conjunto y objetner la respuesta de la que se resuelve mas rapido.

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)//Se ejecutara la mas rapida
//     .catch( console.warn );

//Llamada a la funcion no asincrona
// buscarHeroe('capi')
//     .then(heroe => console.log(heroe))
//     .catch(console.warn);

// buscarHeroeAsync('iron')
//     .then(heroe => console.log(heroe))
//     .catch(console.warn);

//const heroes = obtenerHeroesArr();
//console.log({heroes});

// console.time('await');
// obtenerHeroesArr().then(heroes =>{
//     console.table(heroes);
//     console.timeEnd('await');
// });

// console.time('await');
// obtenerHeroeAwait('capi2')
//     .then(heroe =>{
//         console.log(heroe);
        
//         console.timeEnd('await');
// }).catch( console.warn);


heroesCiclo();

heroeIfAwait('iron');