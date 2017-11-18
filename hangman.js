var words = ["clint" , "spaghetti" , "badge" , "cactus" , "saloon" , "duel" , "cassidy" , 
"outlaw" , "maverick" , "revolver" , "ranger" , "sherrif", "bounty" , "reward" , "wagon" , "horse" , "standoff"]
var guess = [];
var guessesUsed =0;
var wordLetters = [];
var guessWord = [];
var guesses = 8;
var wins = 0;
var losses = 0;
var rightGuessCount = 0;
var wrongLetters = [];

	
   function randWord() {
	 guessWord = words[Math.floor(Math.random() * words.length)];
	 wordLetters = guessWord.split("");
	 console.log("Length of word string : " + wordLetters.length);
	console.log(guessWord);
	 console.log(wordLetters);
	 for(var i=0; i<wordLetters.length; i++){
	guess.push("_");
	 
     //Line 32 Problem
	 //document.getElementById("rightGuessCount").innerHTML = guess.join("");





	}


	}

	randWord();
	console.log(guess);


// I can't get the user key to populate the empty array 
document.onkeyup = function compareWord(event) {


	
    
	var letterGuess = event.key;   
	console.log(event.key);
	console.log(letterGuess);
     console.log(wordLetters.length);

console.log(event.keyCode);
 if(event.keyCode>=65 && event.keyCode <=90){
	   if (wordLetters.indexOf(letterGuess) > -1) {

		for(var i = 0; i < wordLetters.length; i++){
			if (wordLetters[i] === letterGuess){
				guess[i] = letterGuess;
				rightGuessCount++;
				console.log("Your total right guesses: " + rightGuessCount);
	            console.log("guess: " + guess);
	            document.getElementById("rightGuesses").innerHTML = guess.join(" ");
	            	winLose();
	            
				
	           
			}
		}
	}
     
	else if(letterGuess == wrongLetters.toString() ){
        alert("you've already guessed this letter");
        console.log("these letters (line 71) are wrong " + wrongLetters)
        console.log(letterGuess)
	}
       
	else {                              
		
		wrongLetters.push(letterGuess);
		guesses --;
	    console.log("these letters are wrong: " + wrongLetters);
		console.log("remaining guesses: " + guesses);
		document.getElementById("guessed").innerHTML = wrongLetters
		document.getElementById("Remaining").innerHTML = guesses;

		winLose();
	}

}
}



	function reset(){
      guess = [];
      guessesUsed =0;
      wordLetters = [];
      guessWord = [];
      guesses = 8;
      wrongLetters = [];
      randWord();
      document.getElementById("rightGuesses").innerHTML = guess.join("");
	}


	function winLose(){
		console.log("guess " + guess);
		console.log("wowrdletters " + wordLetters);
       if (guess.toString() == wordLetters.toString()) {
         alert("You can be my huckleberry");
         wins++;
         console.log("your current win total")
         document.getElementById("wins").innerHTML = wins;
         reset();
       }
       else if(guesses == 0){
       		alert("you lose");
       		losses++;
       		document.getElementById("losses").innerHTML = losses;
       		reset();
       }
   }
        
       