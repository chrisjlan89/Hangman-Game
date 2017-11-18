var word = ["c","o","w","b","o","y"];
var guess = [];

for(var i=0; i<word.length; i++){
	guess.push("");
}
document.onkeyup = fuction(){
for(var i=0;i<word.length;i++){
	if(letter == word[i]){
		guess[i] = letter;
	}
}

console.log(guess);