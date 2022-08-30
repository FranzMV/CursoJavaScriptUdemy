class Persona{


    static porObjeto({nombre, apellido, pais} ){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre    = nombre;
        this.apellido  = apellido;
        this.pais      = pais;

    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Melisa',
      apellido1 ='Flores',
      pais1 = 'Honduras';


const fran ={
    nombre: 'Fran',
    apellido : 'Valle',
    pais : 'Spain'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto( fran );
console.log(persona1);
console.log(persona2);