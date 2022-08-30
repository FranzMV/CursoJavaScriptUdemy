/**
 * Singleton : Una instancia unica de una clase para toda la aplicacion que regrese la misma instancia de la clase.
 */

class Singleton{

    static #instancia;
    nombre = '';

    constructor(nombre = ''){

        if(!!Singleton.#instancia){ return  Singleton.#instancia; }
        
        Singleton.#instancia = this;
        this.nombre = nombre;
        return this;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
console.log(`Nombre de la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre de la instancia1 es: ${instancia2.nombre}`);