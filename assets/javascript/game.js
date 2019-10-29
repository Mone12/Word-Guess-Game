// Constellation Theme

// Create an array of constellations

var wordOptions = [
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

//  Counter variables
var wins = 0;
var losses = 0;
var guessesRemaining= 10;

// Empty variales
var randomWord= "";
var lettersOfWord = [];
var blankAndCorrect = [];
var blanks = 0;
var wrongGuesses =[];


// Game Function
  function Game() {
    
    //Chooses words at random 
    randomWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;

    // Adds "_" to answerLetters with for loop
    for (var i = 0; i < blanks; i++) {
      blankAndCorrect.push("_");
    }

    document.getElementById("current-word").innerHTML = " " + blankAndCorrect.join(" ");

};

function reset() {
  guessesRemaining = 10;
  wrongGuesses = [];
  blankAndCorrect = [];
  Game()
}

function letterCheck(letter) {
  var letterInWord = false;
  for (var i = 0; i < blanks; i++) {
    if (randomWord[i] == letter) {
      letterInWord = true;
    }
  }
  if(letterInWord) {
    for (var i = 0; i < blanks.length; i++) {
      if (randomWord[i] == letter) {
        blankAndCorrect[i] = letter;
      }
    }
  }
    else {
      wrongGuesses.push(letter);
      guessesRemaining--;
  }
  console.log(blankAndCorrect);
};
  
function isFinished() {
  if (lettersOfWord.toString() == blankAndCorrect.toString()) {
    wins++;
    reset()
    document.getElementById("wins-text").innerHTML = " " + wins;
  
  } else if (guessesRemaining === 0) {
    losses++;
    reset()
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;
  }

document.getElementById("current-word").innerHTML = " " + blankAndCorrect;
document.getElementById("remaining-guesses").innerHTML = "Remaining guess: " + guessesRemaining;

}

Game()
  document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode);
    letterCheck(guesses);
    isFinished();
    
    document.getElementById("guesses-made").innerHTML = "Letters: " + wrongGuesses.join(" ");
  
}

