class Persona{
    
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }


    //Getter y Setters
    /**
     * @param {string} comida
     */
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
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
spiderman.setComidaFavorita = 'Pizza';
console.log( spiderman );
console.log(spiderman.getComidaFavorita);