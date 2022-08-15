const elMayor = (a,b) => (a > b) ? a : b;

console.log(elMayor(10,8));

const esMiembro = (miembro) => (miembro) ? '2 Dolares' : '10 Dolares';
console.log(esMiembro(false));

//Condicionales anidados
const nota = 95;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({ grado });