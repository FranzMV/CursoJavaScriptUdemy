//Alternativa if else

const today = new Date();
let day = today.getDay();

console.log({ day }); //Devuele el numero de dia: 0 (domingo), 1 (lunes), 2 (martes), etc

//Si usar if else, switch, unicamente objetos o array

//day = 3;

//Ejemplo con objetos
const daysWeek = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

console.log( daysWeek[day] || 'Dia no valido');

day = 5;
//Con arrays
const daysWeek2 =['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log( daysWeek2[day] );