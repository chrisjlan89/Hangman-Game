var words = ["Clint" , "Spaghetti" , "Badge" , "Cactus" , "Saloon" , "Duel" , "Cassidy" , "Outlaw" , "Maverick" , "Revolver"]
var wordLetters = [];
var winCount = 0;
var lossCount = 0;
var correctLetters = 0;
var incorrectLetters = [];
var attempts = 9;
var attemptsUsed = 0;
var underScores = [];
var Guessword = "";
var wordCount = 0;





function Reset() {
   var correctLetters = 0;
   var incorrectLetters = [];
   var attempts = 9;
   var attemptsUsed = 0;
   var underScores = [];



}


// function to generate a random word
function randomWord() {
	var Guessword = words[Math.floor(Math.random() * words.length)];
	var wordLetters = Guessword.split("");

}


//function to start game

 do while (attemptsUsed <= 0) {
document.onkeyup = function startGame() {
	Reset();
	randomWord();

}
}


//  Get user input

function userInput {
document.onkeyup = function(keyPress) {
   var userGuess = event.key;

do while (attempts = 0; ) {

if ( userGuess === wordLetters;){
	correctLetters ++;
}
 else {
 	attempts --;
 }

}


function winLose {
	if (attempts > 0 )
}