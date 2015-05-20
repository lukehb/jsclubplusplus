// 'module.exports' is a io/node.JS specific feature, it does not work with regular JavaScript
module.exports = new cop();

// Private variables and functions which will not be accessible outside this file
//Our cop class

function cop(){

}

cop.prototype.testLastNLettersFromZ = function(nLetters) {
	return "abcdefghijklmnopqrstuvwxyz".split('').reverse().slice(0, nLetters);
};

cop.prototype.testEquiTriArea = function(side) {
	return side * side * 0.5;
};

cop.prototype.testNthFibNum = function(n){
	return function(n,a,b) {
		return n>0 ? arguments.callee(n-1,b,a+b) : a;
	}(n,0,1);
};

cop.prototype.testMeaning = function(){
	return 42;
};

cop.prototype.testLicense = function(){
	return {
		name: "Celery Man",
		dob: 2015
	};
};