import '../css/componentes.css';
//Palabra reservada para exportar la funcion: export
export const saludar = (nombre) =>{
    console.log('Creando etiquet h1');

    const h1 = document.createElement('h1');
    h1.innerText =`Hola, ${nombre} !!!`;

    document.body.append(h1);
}