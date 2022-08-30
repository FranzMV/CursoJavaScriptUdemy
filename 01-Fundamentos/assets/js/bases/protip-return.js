
function crearPersona(nombre, apellido){
    return{ nombre, apellido }
}

const crearPersonaLambda = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersonaLambda('Fran', 'Valle');
console.log({persona});

function imprimeArgumentos(){
    console.log(arguments);
}

//Los puntos en el argumento significan que crea un array con cada uno de los elementos.
//Se llama parametro rest, y no puede tener mas argumentos la funcion, a no ser que el parametro ...args quede el ultimo
// y el resto siempre se pongan en la izquierda
const imprimeArgumentosLambda = (...args) =>{
    console.log(args);
} 

const imprimeArgumentosLambda2 = (...args) => {
    return args;
};

imprimeArgumentos(40, true, false, 'Fran', 'Hola');

//Podemos obtener los valores que devuelve la funcion y almacenarlos en valiables individuales
const [edad, vivo, solteo, nombre, saludo] = imprimeArgumentosLambda2(40, true, false, 'Fran', 'Hola');
console.log({edad, vivo, solteo, nombre, saludo});
console.log(edad);

//Si trabajamos con objetos, por ejemplo, podemos obtener un atributo e ignorar lo que no queramos
const {apellido : nuevoApellido} = crearPersonaLambda('Fran', 'Manzanedo');
console.log({nuevoApellido});

//Destructuracion de argumentos.
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    //edad: 40,
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
};

const imprimePropiedades = (personaje) =>{
    console.log('Nombre: '+personaje.nombre);
    console.log('Codigo: '+personaje.codeName);
    console.log('Vivo: '+personaje.vivo);
    console.log('Edad: '+personaje.edad);
    console.log('Trajes: '+personaje.trajes);
}

imprimePropiedades(tony);

//Podemos selecciona unicamente los atributos que nos interesan y, si algun atributo no tiene valor, asignarle uno por defecto

const imprimePropiedades2 = ({nombre, codeName, vivo, edad = 15, trajes}) =>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades2(tony);