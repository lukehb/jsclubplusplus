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
	
}

//Generate a new random secret number (integer) which resides within the bounds inclusively
HiLo.prototype.GenerateNewSecretNumber = function(){
	
}

HiLo.prototype.SetBounds = function(minNumber, maxNumber){
	
}

//checks if number is within the bounds
HiLo.prototype.IsValidNumber = function(number) {
	
}

//Check if the number is invalid, higher, lower or the if it is the secret number. 
// - If it is invalid, print a console message indicating so and return false. 
// - If it is higher or lower, print a console message indicating so and increment the currentGuesses and return false. 
// - If it is the secretNumber, return true. 
HiLo.prototype.ProcessGuess = function(number){
	
}

//First check if a game is in play, indicating to the player through a console message that it isn't if it isn't
//Then process the guess and check if the player has guessed correctly, if they have, print a console message indicating so, and end the game.
HiLo.prototype.GuessNumber = function(guessNumber){
	
}