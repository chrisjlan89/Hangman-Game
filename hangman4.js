var words = ["Clint" , "Spaghetti" , "Badge" , "Cactus" , "Saloon" , "Duel" , "Cassidy" , "Outlaw" , "Maverick" , "Revolver"]
var guess = [];
var guessesUsed =0;
var wordLetters = [];
var guessWord = [];
var guesses = 7;
var wins = 0;
var losses = 0;




	
   function randWord() {
	var guessWord = words[Math.floor(Math.random() * words.length)];
	var wordLetters = guessWord.split("");
	console.log(guessWord);
	 console.log(wordLetters);
	 for(var i=0; i<wordLetters.length; i++){
	guess.push("");

	}


	}

	console.log(randWord());
	console.log(guess);


// I can't get the user key to populate the empty array 
document.onkeyup = function compareWord(event) {
	var letterGuess = event.key;   // dont think I need this and if I keep it should event.key be replaced with wordLetters on  lines 31 and 32?
	console.log(event.key);
	console.log(letterGuess);

	for(var i = 0; i < wordLetters.length; i++){
		if (wordLetters[i] === letterGuess){
			console.log("inside if statement");
			guess.push(letterGuess);
		}
	}
}
	// //for(var i=0; i<guesses; i++){
	// 	if(wordLetters === letterGuess ) {
	// 	// rightGuessCount++;
	// 		(guess = letterGuess) ; 
	// 	 	console.log(guess); 
	// 	} // end if
	// 	else {
	// 		guessesUsed--;
	// 	}
	// //} // end for loop
	
/*    
	console.log(guess);

	function winLose() {

		if(guess === wordLetters){
			wins++;
				alert("You've won")
			}
		
	  else  {
	  	 losses++;
	  	alert("Sorry, maybe next time";)
	  }

	}


	
 function reset() {

var guess = [];
var guessesUsed =0;
var wordLetters = [];
var guessWord = [];
var guesses = 7;




}

ducumnet.onkeydown = function startGame(){
	reset(); = event.key;
	randWord(); = event.key;
}*/