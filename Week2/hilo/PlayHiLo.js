var hilo = require('./HiLo.js');


function PlayHiLo(){
	//this one is bundled with node/io
	var readline = require('readline');
	//make our input/output console
	this.console = readline.createInterface(process.stdin, process.stdout);
}

PlayHiLo.prototype.Init = function(){
	hilo.NewGame();
	this.Guess();
};

PlayHiLo.prototype.Guess = function(){
	var that = this;
	this.console.question("What do you guess? ", function(answer){
		hilo.GuessNumber(answer);
		if(hilo.gameOver){
			that.PlayAgain();
		}else{
			that.Guess();
		}
	});
};

PlayHiLo.prototype.PlayAgain = function(){
	var that = this; 
	this.console.question("Play again? [y] ", function(answer){
		if(answer == "y"){
			that.Init();
		}else{
			process.exit(0);
		}
	});
};


//play the actual game here
new PlayHiLo().Init();