module.exports = new HiLo();

function HiLo()
{
	this.secretNumber = null;
	this.bounds = { min : 0, max : 100 };
	this.allowedGuesses = 5;
	this.currentGuesses = 0;
	this.gameOver = true;
}

//Sets values to begin a new game, and outputs to the console what range the number is in and how many guesses are allowed
HiLo.prototype.NewGame = function(allowedGuesses) {
	this.GenerateNewSecretNumber();
	this.currentGuesses = 0;
	this.allowedGuesses = typeof allowedGuesses == 'undefined' ? this.allowedGuesses : allowedGuesses;
	this.gameOver = false;
	console.log(this.bounds.min);
	console.log("The number is between [" + this.bounds.min + "] and [" + this.bounds.max + "]");
	console.log("You are allowed [" + this.allowedGuesses + "] guesses to work out what it is.");
}

//Generate a new random secret number (integer) which resides within the bounds inclusively
HiLo.prototype.GenerateNewSecretNumber = function(){
	this.secretNumber = Math.floor(Math.random() * (this.bounds.max - this.bounds.min + 1)) + this.bounds.min;
}

HiLo.prototype.SetBounds = function(minNumber, maxNumber){
	this.bounds = { min : minNumber, max : maxNumber};
}

//checks if number is within the bounds
HiLo.prototype.IsValidNumber = function(number) {
	if(this.bounds.min > number || this.bounds.max < number){
		return false;
	}
	
	return true;
}

//Check if the number is invalid, higher, lower or the if it is the secret number. 
// - If it is invalid, print a console message indicating so and return false. 
// - If it is higher or lower, print a console message indicating so and increment the currentGuesses and return false. 
// - If it is the secretNumber, return true. 
HiLo.prototype.ProcessGuess = function(number){
	if(!this.IsValidNumber(number)){
		console.log("Please guess a number between [" + this.bounds.min + "] and [" + this.bounds.max + "]");
		return false;
	}

	if(number == this.secretNumber){
		return true;
	}
	
	console.log(
		"The secret number is " + 
		(number > this.secretNumber ? "lower" : "higher") + ".");
		
	this.currentGuesses++;
	return false;
}

//First check if a game is in play, indicating to the player through a console message that it isn't if it isn't
//Then process the guess and check if the player has guessed correctly, if they have, print a console message indicating so, and end the game.
HiLo.prototype.GuessNumber = function(guessNumber){
	if(this.gameOver){
		console.log("A game is not currently in play, please start a new game");
		return;
	}
	
	if(this.ProcessGuess(guessNumber)){
		console.log("You have guessed the secret number. You Win!");
		this.gameOver = true;
		return;
	}
	
	if(this.allowedGuesses <= this.currentGuesses){
		console.log("You have run out of guesses. You Lose!");
		this.gameOver = true;
	}
}