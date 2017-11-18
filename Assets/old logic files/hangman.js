 var words = ["Butch Cassidy" ,"Clint" ,"High Noon" , "McCree" , "Django" , "Blazing Saddles" , 
 "Spaghetti" , "Sergio Leone" , "The Good The Bad and The Ugly" , "Sherrif" , "Maverick" , "Cactus"  ]

 var chosenWord = "";
 var wordLetters = [];
 //var blanks =
 var userGuess = [];
 var userWord = [];
/* var letters = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , 
"N" , "O" , "P" , "Q , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"]*/

 // Variables to store wins and losses , correct guesses and incorrect
 var win = 0; 
 var loss =0;
 var wrong = [];
 var correct = [];
 var attempts = 9;
 var attemptsUsed = 0;

 





 // Setting up a function to grab a random string from the array

 document.onkeyup = function() {



 	if ()
     



 	/*var userGuess = event.key;*/

 	var chosenWord = words[Math.floor(Math.random() *words.length)];

 	var wordLetters = chosenWord.split("")

   console.log(chosenWord)
   console.log(wordLetters)
 }

// Capture a user input and store it
 document.addEventListener('keypress' , function() {
	console.log(press);
});




 // Setting up a fucntion to compare user input aginst variable wordLetters


   function compare() {
   	for (var i = 0; i < 10) {


   	if (userGuess === wordLetters) {
   		document.getElementById ("rightGuesses")
   	}

    else i++;

   


   }



// Display win / lose message 

if (userWord === chosenWord ) {
	// you
}
   else {
   	//you lose
   }









 






 /*}
    for (var wrong = 0; wrong < 10; wrong++) {

 	if (userGuess === words) { 

 	}

 	else (userGuess !== words) {

 	}



 }


 function (startGame) {

 }


*/