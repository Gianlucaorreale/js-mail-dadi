/*
Mail
Crea (inventa) una lista di inidirizzi mail autorizzati.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);

*/


/****ESERCIZIO MAIL */

const mailAddress = ["fabio.folino@gmail.com" , "matteo.galletti@gmail.com" , "ilaria.trecca@gmail.com" , "francesca.maurelli@gmail.com"];
const access = prompt('inserisci la tua mail');

console.table(mailAddress);

let flag = false;

for(let i=0; i<mailAddress.length ; i++){
    if( access===mailAddress[i]){
        flag=true;
    }
}

if (flag==true){
    console.log('benvenuto')
}

else {
    console.log ('spiacenti')
}




