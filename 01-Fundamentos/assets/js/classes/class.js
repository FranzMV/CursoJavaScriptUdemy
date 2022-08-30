class Persona{
    
    static _conteo = 0;
    
    static get conteo(){ return Persona._conteo + ' instancias'; }
    
    static mensaje(){
        console.log(this.nombre); //undefined
        console.log('Soy un metodo statico');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo ++;
    }


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
// console.log( spiderman );
// spiderman.quienSoy();
// spiderman.miFrase();
// spiderman.setComidaFavorita = 'Pizza';
// console.log( spiderman );
// console.log(spiderman.getComidaFavorita);
console.log('Conteo statico: ', Persona._conteo);
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';
console.log( Persona.propiedadExterna );
console.log( Persona );