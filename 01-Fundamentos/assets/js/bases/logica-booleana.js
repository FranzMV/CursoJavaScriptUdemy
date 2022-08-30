const regresaTrue = () =>{
    console.log('Regresa True');
    return true;
}

const regresaFalse = () =>{
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion: ');
console.log( true ); //true
console.log( !true ); //false
console.log( !false ); //true

console.log( !regresaFalse() ); //true

console.warn('AND: '); //Si todos los valores son verdaderos
console.log(true && true); //true
console.log( true && !false ); //true

console.log('OR'); //Lo opuesto del AND, para que regrese true almenos una condicion debe ser true.
console.log( true || false ); //true
console.log( false || false ); //false