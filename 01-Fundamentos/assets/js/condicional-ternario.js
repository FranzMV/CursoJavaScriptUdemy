/**
 * Dia de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 0;//0: domingo, 1: lunes
const horaActual = 10;

let horaApertura;
let mensaje; //Esta abierto, esta cerrado, hoy abrimos a las XX

//if(dia === 0 || dia === 6){
// if([0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }


horaApertura = ( [0,6].includes( dia )) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ?  'Abierto' : `Esta cerrado. Hoy abrimos a las ${horaApertura}`;

// if( horaActual >= horaApertura){
//     mensaje = 'Abierto';
// }else{
//     mensaje = `Esta cerrado. Hoy abrimos a las ${horaApertura}`;
// }

console.log({ horaApertura, mensaje});