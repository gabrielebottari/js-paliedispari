function isPalindrome(word) {
    let reverseWord = word.split('').reverse().join('');
    return word === reverseWord;
  }
  
  let word = prompt('Inserisci una parola: ');

  if (isPalindrome(word)) {
    console.log('La parola è palindroma');
    
  } else {
    console.log('La parola non è palindroma');
  }