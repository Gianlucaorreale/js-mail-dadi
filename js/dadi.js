/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
*/

const gameDicePlayer = Math.floor(Math.random() * 6) + 1;
const gameDiceCpu = Math.floor(Math.random() * 6) + 1;
const winnerSentence = 'il vincitore è :';
const player = 'il giocatore';
const cpu = 'il computer'
const balance = 'pareggio!'

console.log ('valore giocatore : ' + gameDicePlayer);
console.log ('valore cpu :' + gameDiceCpu);

if(gameDicePlayer > gameDiceCpu){
    console.log(winnerSentence + player )
}

else if (gameDicePlayer < gameDiceCpu){
    console.log(winnerSentence + cpu)
}

else {
    console.log(balance)
}