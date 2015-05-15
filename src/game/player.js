// 'module.exports' is a io/node.JS specific feature, it does not work with regular JavaScript
module.exports = new player();

function player() {

}

player.prototype.reversabet = function(numchars) {
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var reversabet = alphabet.reverse();
	return reversabet.slice(0,numchars);
};

player.prototype.triAreal = function(side) {
	var area = 0.5 * side * side;
	return area;
};

player.prototype.fib = function(n) {
	return function(n,a,b) {
		return n>0 ? arguments.callee(n-1,b,a+b) : a;
	}(n,0,1);
};

player.prototype.meaningOfLife = function() {
	return 42;
}

player.prototype.driversLicense = function() {

	var fname = "Elliot ";
	var lname = "Strickland";
	var dob = "23 07 1992";
	return {"name": fname + lname, "dob":dob};
}

player.prototype.mult = function(a,b,c) {
	result = a * b * c;
	return result;
}

