/*
Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// prima funzione per capire se la parola è palindroma
function isPalindrome(word) {
    // prenderà la parola (stringa) la dividerà in un array di lettere poi invertirà l'ordine
    // infine le ricompatterà in un'altra parola (stringa).
    let reverseWord = word.split('').reverse().join('');
    // se la prima parola e quella inversa corrispondono sarà palindroma
    return word === reverseWord;
}

//seconda funzione al click del bottone (vedere onclick su HTML del button)
function palindromeVerify() {
    //prende il valore dell'input e in base al risultato della prima funzione
    let word = document.getElementById('palindrome').value;

    if (isPalindrome(word)) {
    console.log('La parola è palindroma');
    // Stampa il risultato nell'HTML
    document.getElementById("result").innerText = 'La parola è palindroma';
    document.getElementById("result").className = "right";
    
    } else {
    console.log('La parola non è palindroma');
    // Stampa il risultato nell'HTML
    document.getElementById("result").innerText = 'La parola non è palindroma';
    document.getElementById("result").className = "wrong";
    }
}