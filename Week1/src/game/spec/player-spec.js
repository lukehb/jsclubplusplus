var player = require("../player");

describe("the last n letter of the alphabet starting from z", function () {
  it("should be z,y,x,w,v,u,t", function () {
    var result = player.reversabet(7);
    expect(result.toString()).toBe('z,y,x,w,v,u,t');
  });
});

describe("the area of equi-triangle with side length 99", function(){
	it("should be 4900.5", function() {
		var result = player.triAreal(99);
		expect(result).toBe(4900.5);
	});
});

describe("the 10th fibonacci number", function(){
	it("should be 34", function() {
		var result = player.fib(9);
		expect(result).toBe(34);
	});
});

describe("the meaning of life", function(){
	it("should be hitchhiker", function() {
		var result = player.meaningOfLife();
		expect(result).toBe(42);
	});
});

describe("a drivers license with name and dob", function(){
	it("should have name and dob", function() {
		var result = player.driversLicense();
		expect('name' in result && 'dob' in result).toBe(true);
	});
});

describe("multiplying numbers together", function(){
	it("should be 990", function() {
		var result = player.mult(9, 11, 10);
		expect(result).toBe(990);
	});
});


