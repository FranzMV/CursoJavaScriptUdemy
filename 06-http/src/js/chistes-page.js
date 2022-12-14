import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtroChiste, olChistes;


const crearChistesHTML = () =>{
    const html = ` <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">Otro Chiste</button>

    <ol class="mt-2 list-group">
    </ol>`;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}

const eventos = () =>{
    olChistes = document.querySelector('ol');
    btnOtroChiste = document.querySelector('button');

    btnOtroChiste.addEventListener('click', async ()=>{
        btnOtroChiste.disable = true;
       dibujarChiste( await obtenerChiste() );
       btnOtroChiste.disable = false;
    });
}

//Chiste  {id, value}
const dibujarChiste = (chiste) =>{
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}<b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');

    olChistes.append(olItem);
}

export const init = () =>{ 
    crearChistesHTML();
    eventos(); 
}