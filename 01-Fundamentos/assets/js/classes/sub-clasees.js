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
        console.log( `Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log( `Soy ${this.codigo} dice: ${this.codigo}`);
    }
}

class Heroe extends Persona{
   
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        
        this.clan = 'Los Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}


const spiderman = new Heroe('Peter Parker', 'Spiderman','Soy tu amigable vecino Spiderman');
console.log(spiderman);
spiderman.quienSoy();
