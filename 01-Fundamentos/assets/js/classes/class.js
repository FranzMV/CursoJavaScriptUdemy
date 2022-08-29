class Persona{
    
    nombre = '';
    codigo = '';
    frase  = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy(){
        console.log( `Soy ${this.nombre} y mi nombre es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log( `Soy ${this.codigo} dice: ${this.codigo}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Hola hola');
console.log( spiderman );
spiderman.quienSoy();
spiderman.miFrase();