//Los objetos literales son como los objetos con pares claves valor

//Podemos marcar el objeto como constante ya que podemos anyadir, eliminar y modificar los valores de sus atributos
//Lo que no podemos hacer es asignar el objeto a otro valor, por ejemplo personaje = OtroObjeto, o personaje = true;
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    cords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }, 
};

console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Edad: ', personaje.edad);
console.log('Coordenadas: ',personaje.cords);
console.log('Coordenadas Latitud: ',personaje.cords.lat);
console.log('Direccion Ubicacion: ',personaje.direccion.ubicacion);
console.log('Numero de trajes: ',personaje.trajes.length);
console.log('Ultimo taje: ',personaje.trajes[personaje.trajes.length -1]);
//Otra forma de acceder a los atributos
console.log('Nombre: ', personaje['nombre']);


const x = 'vivo';
console.log('Vivo: ',personaje[x]);

//Mas detalles sobre objetos literales

//Borrar una propiedad del objeto
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Podemos dejar las propiedades del objeto inmutables a traves de la instruccion freeze
Object.freeze(personaje);
personaje.dinero = 1000000000;
console.log(personaje);
//Pero s'i podemos modificar las propiedades anidadas, por ejemplo
personaje.direccion.ubicacion = 'Alicante';
console.log(personaje);

//Podemos hacerlas inmutables de esta manera
Object.freeze(personaje.ubicacion);

//Listado de todas la propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje);
console.log({propiedades});
//Y los valores
const values = Object.values(personaje);
console.log({values});