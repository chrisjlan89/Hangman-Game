var words = ["Clint" , "Spaghetti" , "Badge" , "Cactus" , "Saloon" , "Duel" , "Cassidy" , "Outlaw" , "Maverick" , "Revolver"]
var wordLetters = [];
var winCount = 0;
var lossCount = 0;
var correctLetters = 0;
var incorrectLetters = [];
var attempts = 9;
var attemptsUsed = 0;
var underScores = [];
var chosenWord = "";
var wordCount = 0;





/*var words = ["Clint" , "Spaghetti" , "Badge" , "Cactus" , "Saloon" , "Duel" , "Cassidy" , "Outlaw" , "Maverick" , "Revolver"]
var chosenWord = "";
var wordLetters = [];
var wordCount = 0;*/  // for testing

// first we want to generate a random word
function randomWord() {
var chosenWord = words[Math.floor(Math.random() * words.length)];
var wordLetters = chosenWord.split("");
var wordCount = wordLetters[i];
console.log(wordCount);
console.log(wordLetters); 

};


// Reset function
function reset () {
	attempts = 9;
	attemptsUsed = 0;
	wordLetters = [];
	correctLetters = 0;
	incorrectLetters = [];
    underScores = [];
    randomWord ();

}

 document.onKeyUp = function startGame () {  // Need to figre out how to make this fire only once
	reset();
}


// Now we want to get user input and store it




// Compare the stored input to the var chosenWord. 
// If there is a match in the index push it to coreect guess or incorrect guess if not.
// use .indexOf()   ..... but how?
function compare() {
    

    if(chosenWord.indexOf(keypress) > -1 )
         { 

    }
}


// function to determine if won or lost
function winLose () {
   if (correctLetters ===  )
}


// var userInput = 

// document.onkeyup = function(event) {
        // userText.textContent = event.key;