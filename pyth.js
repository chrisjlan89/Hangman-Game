function pyth(a , b) {
	var a2 = a * a;
	var b2 = b* b;
	var c2 = a2 +b2;
	return Math.sqrt(c2);
}


var answers = [];

function storer(x, y) {
	var ans = pyth(x, y);
	answers.push(ans);
}







