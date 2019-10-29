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

// Elements that holds reference

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var answerText = document.getElementById("right-guesses");
var guessesText = document.getElementById("guesses-made");
var guessesleftText = document.getElementById("remaining-guesses");

// Game Function
  function play () {
    
    //Chooses words at random 
    var computersChoice = 
      wordOptions[Math.floor(Math.random()* wordOptions.length)];
    var lettersLeft  = computersChoice.length;    
      
      // variables based off of user's input
      var guessesRemaining= 10;
      var gameAnswer = [];
      var displayGuesses =[];

      // for loop for blank spaces of every letter of word
      for (var index = 0; index < computersChoice.length; index++) {
            gameAnswer.push("_");
         }

         var displayString = gameAnswer.join(" ");


      // User's input
      



  }
 

   
 

