var hilo = require("../HiLo");

describe("make a new secret number and reset current guesses", function () {
  it("should be valid secret and current guesses", function () {
    hilo.NewGame();
	var n = hilo.secretNumber;
	var isNumber = !isNaN(parseFloat(n)) && isFinite(n);
	
    expect(isNumber).toBe(true);
	expect(hilo.currentGuesses).toBe(0);
  });
});

describe("make a new secret number within bounds", function () {
  it("should be valid secret and current guesses", function () {
	hilo.GenerateNewSecretNumber();
	var n = hilo.secretNumber;
	expect(n <= hilo.bounds.max && n >= hilo.bounds.min).toBe(true);
  });
});

describe("set new bounds", function () {
  it("should be bounds of 20 and 40", function () {
	hilo.SetBounds(20,40);
	expect(40 == hilo.bounds.max && 20 == hilo.bounds.min).toBe(true);
  });
});

describe("check for valid and in valid numbers", function () {
  it("should be 37 is valid and 137 is invalid", function () {
	hilo.SetBounds(20,40);
	var valid = hilo.IsValidNumber(37);
	var invalid = hilo.IsValidNumber(137);
	expect(valid).toBe(true);
	expect(invalid).toBe(false);
  });
});


describe("check for valid and in valid numbers", function () {
  it("should be 37 is valid and 137 is invalid", function () {
	hilo.SetBounds(20,40);
	hilo.secretNumber = 37;
	var badGuess = hilo.ProcessGuess(137);
	var wrongGuess = hilo.ProcessGuess(33);
	var rightGuess = hilo.ProcessGuess(37);
	expect(badGuess).toBe(false);
	expect(wrongGuess).toBe(false);
	expect(rightGuess).toBe(true);
  });
});


