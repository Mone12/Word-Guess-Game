// Constellation Theme

// Create an array of outerspace object and letters

var constellations = [
  "aries",
  "cancer",
  "gemini",
  "hercules",
  "ursa major",
  "ursa minor",
  "orion",
  "pegasus",
  "taurus",
  "sagittarius",
  "leo",
  "pisces",
  "virgo",
  "libra",
  "ophiuchus",
  "perseus",
  "capricorn",
  "hydra",
  "scorpio",
  "triangulum",
  "centaurus"
];
var userOptions = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

// variables that hold wins/losses/guessmade/guessesleft/rightguess

 var wins = 0;
 var rightLetters = [];
 var guessesLeft = 10;
 var guessedLetters = [];
 var hiddenWord =[];
 var randomChoices = 
 constellations[Math.floor(Math.random() * constellations.length)];

// Elements hold ID references
var winsText = document.getElementById("wins-text");
var guessesRtext = document.getElementById("guessesright-text");
var guessesLtext = document.getElementById("guessesleft-text");
var guessesWtext = document.getElementById("guesseswrong-text");

// Computer randomly chooses word

    for (var index = 0; index < randomChoices.length; index++) {
        hiddenWord.push("_");
}
    guessesRtext.textContent = hiddenWord.join(" ");

    for (var index = 0; index < randomChoices.length; index++) {
       rightLetters.push(randomChoices[index]);
}

  // User input
  document.onkeyup = function(event) {

   var userGuess = event.key;
    
    guessedLetters.push(userGuess);
    console.log(userGuess);
}


// Display user input
// Display wins and losses
// Restart function