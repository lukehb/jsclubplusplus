
// 'module.exports' is a io/node.JS specific feature, it does not work with regular JavaScript
module.exports = new player();

//A simple console that you can direct inputs and outputs through

function player(){
		
};

player.prototype.reversabet = function(nLetters){
	var offset = 26 - nLetters;
	var endOnChar =  97 + offset;
	result = [];
	//character code for 'a' is 97 and z is '122'
	for(var i = 122; i >= endOnChar; i--){
		result.push(String.fromCharCode(i));
	}
	return result;
};

player.prototype.triAreal = function(side){
	return Math.pow(side, 2)/2;
};

player.prototype.fib = function(n){
	return function(n,a,b) {
		return n>0 ? arguments.callee(n-1,b,a+b) : a;
	}(n,0,1);
};

player.prototype.meaningOfLife = function(){
	return 42;
};

player.prototype.driversLicense = function(){
	return {
		name: "Celery Man",
		dob: 2015
	};
};

player.prototype.punchCop = function(){
	console.log("*punches*....it's not very effective.")
};

player.prototype.mult = function(){
	var result = 1;
	for(var arg = 0; arg < arguments.length; ++arg)
	{
		var arr = arguments[arg];
		result *= arr;
	}
	return result;
};



