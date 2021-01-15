// Scrivo una funzione per verificare che la scelta dell'utente sia valida:
function isValid(array, num) {
  if (num < 1 || num > 100) {
    return false;
  }
  if (array.includes(num)) {
    return false;
  }
  if (isNaN(num)) {
    return false;
  } else {
    return true;
  }
}
// Fine funzione.
// In un alert, dobbiamo mostrare all'utente 5 numeri casuali:
var numeriCasuali = [ ];
var numeroCasuale;
var min = 1;
var max = 100;

for (var i = 0; i < 5; i++) {
   numeroCasuale = Math.floor(Math.random() * (max + 1 - min) + min);
   numeriCasuali.push(numeroCasuale);
}
alert(numeriCasuali);
// Dopo 30 secondi dalla chiusura dell'alert, l'utente dovrà inserire 5 numeri a piacere
// in 5 prompt diversi, cercando di ricordare i numeri mostrati nell'alert:
var sceltaUtente;

setTimeout(function () {
  var numeriUtente = [];
  while (numeriUtente.length < 5) {
    sceltaUtente = parseInt(prompt('Scegli un numero'));
    if (isValid(numeriUtente, sceltaUtente)) {
      numeriUtente.push(sceltaUtente)
    } else {
      alert('numero non valido')
    }
  }
  // Calcolo il punteggio:
  var punteggio = [];
  for (var i = 0; i < numeriUtente.length; i++) {
    if (numeriUtente.includes(numeriCasuali[i])) {
      punteggio.push(numeriUtente[i])
    }
  }
  // Stampo il punteggio, che sarà uguale al numero di numeri ricordati dall'utente:
  var punteggioUtente = punteggio.length;

  console.log('Hai indovinato ' + punteggioUtente + ' numeri: ' + punteggio + '.')

}, 30000)
