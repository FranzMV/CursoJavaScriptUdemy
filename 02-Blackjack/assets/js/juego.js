const miModulo = (()=>{
    'use strict'

    let deck = [];
    const tipos =['C', 'D', 'H', 'S'],
          especiales = ['A', 'J','Q','K'];

    let puntosJugadores = [];
    
    //referencias html
    const btnPedir = document.querySelector('#btnPedirCarta'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevoJuego = document.querySelector('#btnNuevoJuego');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntoHTML  = document.querySelectorAll('small');
          


    //Inicializa el juego
    const inicializarJuego = ( numJugadores = 2 ) =>{ 
        deck = crearDeck();
        puntosJugadores = [];
        for(let i = 0; i< numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntoHTML.forEach(element => element.innerText = 0);
        divCartasJugadores.forEach(element => element.innerHTML = '');
       
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    
    //Crea una nueva baraja
    const crearDeck = () =>{
        deck = [];
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
    

    //Permite tomar una carta
    const pedirCarta = () =>{
        if(deck.length === 0)
            throw 'No quedan cartas en la baraja';
        
        return  deck.pop();
    }


    //Comprueba el valor de la carta
    const valorCarta = ( carta ) =>{
        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ?
            (valor === 'A' ) ? 11 : 10
            : valor * 1;
    }


    //Turno: 0 = primer jugador y ultimo es la computadora
    const acumularPuntos = ( carta, turno ) =>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntoHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    //Muestra una nueva carta
    const mostrarNuevaCarta = ( carta, turno ) =>{
        const imgCarta = document.createElement('img');
        imgCarta.src=`assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta)
    }


    //Determina que jugador ha ganado
    const determinarGanador = ()=>{
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
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

    //Turno de la computadora
    const turnoComputadora = (puntosMinimos) =>{
        let puntosComputadora = 0;

        do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length -1);
            mostrarNuevaCarta( carta, puntosJugadores.length -1 );

        }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

        determinarGanador();
    }

    //-------------------- Eventos ---------------------------------------------------
    
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        mostrarNuevaCarta(carta, 0);
    
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

        turnoComputadora ( puntosJugadores[0] );
    });


    btnNuevoJuego.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego : inicializarJuego
    };

})();