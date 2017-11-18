var words = ["clint" , "spaghetti" , "badge" , "cactus" , "saloon" , "duel" , "cassidy" , "outlaw" , "maverick" , "revolver"]
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
document.onkeypress = function compareWord(event) {
	//if(event.key>=48 && event.key<=90){
    
	var letterGuess = event.key;   // dont think I need this and if I keep it should event.key be replaced with wordLetters on  lines 31 and 32?
	console.log(event.key);
	console.log(letterGuess);
     console.log(wordLetters.length);
// }
   if (wordLetters.indexOf(letterGuess) > -1) {

	for(var i = 0; i < wordLetters.length; i++){
		if (wordLetters[i] === letterGuess){
			guess[i] = letterGuess;
			rightGuessCount++;
			console.log("Your total right guesses: " + rightGuessCount);
            console.log("guess: " + guess);
             document.getElementById("rightGuesses").innerHTML = guess.join("");

            
			
           
		}
	}
}
       
		else {                              
			
			wrongLetters.push(letterGuess);
			guesses --;
		    console.log("these letters are wrong: " + wrongLetters);
			console.log("remaining guesses: " + guesses);
			document.getElementById("guessed").innerHTML = wrongLetters
			document.getElementById("Remaining").innerHTML = guesses
		}


	}



	/*function reset(){
      guess = [];
      guessesUsed =0;
      wordLetters = [];
      guessWord = [];
      guesses = 8;
      wrongLetters = [];
      randWord();
	}
*/

	function winLose(){
       if (guess == wordLetters) {
         alert("You can be my huckleberry");
         wins++;
         console.log("your current win total")
         reset();
       }
   }
        
       // else if (guesses === 0){
       // alert("Maybe next time cowboy")
       //losses++;
       // reset();
guess == wordLetters



//function winLose(){
  //     if (rightGuessCount == wordLetters.length) {
    //     alert("You can be my huckleberry");
    //     wins++;
    //     console.log("your current win total")
    //     reset();
    //   }
  // }
