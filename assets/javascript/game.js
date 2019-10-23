// Constellation Theme

// Create an array of outerspace object

var constellation = [
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

// variables that hold wins/losses/guessmade/guessesleft/rightguess
var wins = 0;
var losses = 0;
var guessesRight = [];
var guessesLeft = 10;
var guessesWrong = [];

// Elements hold ID references
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesRtext = document.getElementById("guessesright-text");
var guessesLtext = document.getElementById("guessesleft-text");
var guessesWtext = document.getElementById("guesseswrong-text");

