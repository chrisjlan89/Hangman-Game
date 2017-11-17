var words = ["clint" , "spaghetti" , "badge" , "cactus" , "saloon" , "duel" , "cassidy" , "outlaw" , "maverick" , "revolver"]
var guess = [];
var guessesUsed =0;
var wordLetters = [];
var guessWord = [];
var guesses = 7;
var wins = 0;
var losses = 0;
var wrongLetters = [];






	
   function randWord() {
	 guessWord = words[Math.floor(Math.random() * words.length)];
	 wordLetters = guessWord.split("");
	 console.log("wordLetters.length" + wordLetters.length);
	console.log(guessWord);
	 console.log(wordLetters);
	 for(var i=0; i<wordLetters.length; i++){
	guess.push("_");

	}


	}

	randWord();
	console.log(guess);


// I can't get the user key to populate the empty array 
document.onkeypress = function compareWord(event) {
	//if(event.key>=48 && event.key<=90){
    
	var letterGuess = event.key;   // dont think I need this and if I keep it should event.key be replaced with wordLetters on  lines 31 and 32?
	console.log(event.key);
	console.log(letterGuess);
     console.log(wordLetters.length);
// }
	for(var i = 0; i < wordLetters.length; i++){
		console.log("hello");
		if (wordLetters[i] === letterGuess){
			console.log("inside if statement");
			guess[i] = letterGuess;
            console.log("guess: " + guess);
            document.getElementById("rightGuesses").innerHTML = guess.join("");

            
			
               
		}
       // running through the whole string taking away a guess on every letter. 
			//even correct ones if they are not correct in every spot...which they wouldnt be
		else {                              
			wrongLetters.push(event.key);
			guesses --;
			console.log("these letters are wrong: " + wrongLetters);
			console.log("remaining guesses: " + guesses);
		}


	}

}

