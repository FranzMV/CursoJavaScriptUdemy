/**
 * 2C = 2 of Clubs 
 * 2D = 2 of Diamons
 * 2H = 2 of Hearts 
 * 2S = 2 of Spades 
 */


 let deck = [];
 const tipos =['C', 'D', 'H', 'S'];
 const especiales = ['A', 'J','Q','K'];

 let puntosJugador = 0;
 let puntosComputadora = 0;
 
 //referencias html
 const btnPedir = document.querySelector('#btnPedirCarta');
 const btnDetener = document.querySelector('#btnDetener');
 const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
 const puntoHTML  = document.querySelectorAll('small');
 const divCartasJugador = document.querySelector('#jugador-cartas');
 const divCartasComputadora = document.querySelector('#computadora-cartas');

 //Crea una nueva baraja
 const crearDeck = () =>{
     for(let i = 2; i<= 10; i++){
         for(let tipo of tipos){
             deck.push(i + tipo);
         }
     }
 
     for(let tipo of tipos){
         for (let especial of especiales){
             deck.push(especial + tipo);
         }
     }
 
    return deck.sort((a, b) => 0.5 - Math.random());
 }
 
//Crea la nueva baraja 
crearDeck();

//Permite tomar una carta
const pedirCarta = () =>{
   
    if(deck.length === 0)
        throw 'No quedan cartas en la baraja';
    
    const carta = deck.pop();
    return carta;
}


//Comprueba el valor de la carta
const valorCarta = ( carta ) =>{
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
        (valor === 'A' ) ? 11 : 10
        : valor * 1;
}

//Turno de la computadora
const turnoComputadora = (puntosMinimos) =>{

    do{
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntoHTML[1].innerText = puntosComputadora;
        const imgCarta = document.createElement('img');
        imgCarta.src=`assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21 ) break;

    }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert('Nadie gana! :(');
        }else if( puntosMinimos > 21){
            alert('La computadora gana!');
        }else if( puntosComputadora > 21 ){
            alert('Jugador gana!');
        }else{
            alert('Computadora gana!');
        }
    }, 100);
}

const mostrarNuevaCarta = ( carta )=>{
    const imgCarta = document.createElement('img');
    imgCarta.src=`assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);
}

//Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta );
    puntoHTML[0].innerText = puntosJugador;
    mostrarNuevaCarta(carta);
  
    if(puntosJugador > 21){
        console.log('Los siento, perdiste!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }
    else if(puntosJugador === 21){
        console.log('21, Ganaste!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }
});

btnDetener.addEventListener('click', ()=> {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora ( puntosJugador );
});

btnNuevoJuego.addEventListener('click', () => {
    deck = [];
    deck = crearDeck();
    puntosComputadora = 0;
    puntosJugador = 0;
    puntoHTML[0].innerText = 0;
    puntoHTML[1].innerText = 0;
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
});