/*
Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//funzione al click del bottone play
function play() {
    //prendo il valore del select
    let userChoice = document.getElementById('choice').value;
    //prendo il valore del numero
    let userNumber = parseInt(document.getElementById('number').value);
    //genero un numero casuale tra 1 e 5
    let cpuNumber = Math.floor(Math.random() * 5) + 1;
    //sommo i due risultati
    let sum = userNumber + cpuNumber;
    //se il resto diviso 2 da 0 sarà pari altrimenti dispari
    let result = sum % 2 === 0 ? 'even' : 'odd';

    //vari controlli in console
    console.log("User chioce: " + userChoice);
    console.log("User number: " + userNumber);
    console.log("CPU number: " + cpuNumber);
    console.log("Sum: " + sum);
    console.log("Result: " + result);

    //controlli sull'input dell'utente sulla scelta del tag select
    if (userChoice !== 'pari' && userChoice !== 'dispari') {
        //se non seleziona esce alert
        alert('Si prega di scegliere tra "pari" e "dispari"');
        return;
    }
    
    //controlli sull'input dell'utente sulla scelta del numero (già in parte vincolata dal'tag HTML)
    if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
        alert('Si prega di inserire un numero da 1 a 5');
        return;
    }
    
    //comparo il risultato della somma dei due numeri con la scelta dell'utente di pari o dispari
    // se giusta vince sennò vince la CPU
    if (result === userChoice) {
        document.getElementById('result').innerHTML = 'You Win!';
        console.log("You Win!");
    } else {
        document.getElementById('result').innerHTML = 'CPU Win!';
        console.log("CPU win!");
    }
}