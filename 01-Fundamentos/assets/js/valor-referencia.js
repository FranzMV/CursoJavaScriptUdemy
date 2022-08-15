//En js todos los primitivos se pasan por valor y los objetos por referencia

let a = 10;
let b = a;

a = 30;
console.log({ a, b});

let juan = { nombre: 'Juan'};
let ana = juan;
ana.nombre = 'Ana';//Si cambiamos el nombre de Ana, tambien se cambia el de juan, porque estamos pasando la referencia de Juan
console.log({ juan, ana});


const cambiarNombre = (persona) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);//Aqui ocurre el mismo problema
console.log({peter, tony});

//Para romper el pasar valores en objetos como referencia, es decir, una copia de un objeto que apunte a otro espacio en memoria es usar el operador spreed
let fran = {nombre: 'Fran'};
let esther = {...fran};
esther.nombre = 'Esther';
console.log({ fran, esther});

//Lo mismo ocurre si utilizamos la funcion de cambiar nombre. El parametro lo marcamos como un objeto {} y a;adimos el operador spread
const cambiarNombre2 = ({ ...persona }) =>{
    persona.nombre = 'Tony';
    return persona;
}

let antonio = {nombre: 'Antonio'};
let toni = cambiarNombre2(antonio);
console.log({ antonio, toni});

//Arrays
const frutas =['Manzana', 'Pera', 'Platano'];
const otraFrutas = frutas;

otraFrutas.push('Mango');
//Se anyade esta fruta a los dos arrays en vez de a otrasFrutas unicamente, ya que le estamos pasando el valor por referencia
console.table({frutas, otraFrutas});

//Para romper el valor por referencia:
const vegetales = ['Coliflor', 'Berengena', 'Pepino'];
const otrosVegetales = [...vegetales];

otrosVegetales.push('Esparrago');

console.table({vegetales, otrosVegetales});