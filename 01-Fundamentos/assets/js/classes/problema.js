

//Funcion para crear instancias de un objeto de tipo persona
function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = () =>{
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    };
}

const maria = new Persona('Maria', 30);