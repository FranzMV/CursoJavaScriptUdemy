//Defincion de funciones
//Las funciones, aunque no tengan retorno, siempre devuelve undefined.

//1.- Poco recomendable
function saludar(nombre){
    console.log('Hola ' + nombre);
    return 10;
}

//2.- Funciones anonimas
//Al ser una constante no puede ser reutilizada.
const saludar2 = function(nombre){
    console.log('Hola '+nombre);
}


//3.- Funciones lambda
//Son mas eficientes que las anteriores
const saludarLambda = () => {
    console.log('Hola flecha');
}

const saludarLambda2 = (nombre) => {
    console.log('Hola '+nombre);
}


let resultado = saludar('Fran');
console.log({resultado});
saludar2('Fran');
saludarLambda();
saludarLambda2('Esther');

function sumar(a, b){
    return a + b;
}

//Con funcion lambda
const sumar2 = (a, b) =>{
    return a + b;
}

//Se puede resumir la funcion lambda cuando solo tenemos un return y una unica linea de codigo
const sumar3 = (a, b) =>  a + b;

const getAleatorio = () => Math.random();

console.log(sumar(10,30));
console.log(sumar2(100, 35));
console.log(sumar3(10, 11));
console.log(getAleatorio());