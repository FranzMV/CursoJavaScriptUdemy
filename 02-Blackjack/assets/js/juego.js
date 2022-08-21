/**
 * 2C = 2 of Clubs 
 * 2D = 2 of Diamons
 * 2H = 2 of Hearts 
 * 2S = 2 of Spades 
 */


 let deck = [];
 const tipos =['C', 'D', 'H', 'S'];
 const especiales = ['A', 'J','Q','K'];
 
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
 
 console.log(crearDeck());

//Permite tomar una carta
const pedirCarta = () =>{
   
    if(deck.length === 0)
        throw 'No quedan cartas en la baraja';
    
    const carta = deck.pop();
    console.log(deck);
    console.log(carta);

    return carta;
}


//Comprueba el valor de la carta
const valorCarta = ( carta ) =>{
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
        (valor === 'A' ) ? 11 : 10
        : valor * 1;
}

const valor = valorCarta(pedirCarta());
console.log({ valor });
