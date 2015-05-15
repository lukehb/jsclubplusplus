
// 'module.exports' is a io/node.JS specific feature, it does not work with regular JavaScript
module.exports = new game();

//A simple console that you can direct inputs and outputs through

function game(){
	//this one is bundled with node/io
	var readline = require('readline');
	//make our input/output console
	this.console = readline.createInterface(process.stdin, process.stdout);
	//when some line is enetered we check if it is the secret word
	this.console.on('line', function(line) {
		if (line === "tayne"){
			console.log("www.youtube.com/watch?v=MHWBEK8w_YY");
		}
		else if(line === "quit"){
			process.exit(0);
		}
	});	
};

game.prototype.say = function(toSay){
	console.log(toSay);
};

game.prototype.askQuestion = function(question, callback){
	this.console.question(question, callback);
};

game.prototype.askMultiQuestion = function(player, question, callback){
	this.say(question);
	this.waitForPlayerChoice(player, callback);
};

game.prototype.playerRespondTo = function(question, player, args, answer, nextQuestion){
	//output the challenege issued by the cop
	this.say(question);
	//we have to access game from inside a function
	var that = this;
	//wait for player to respond
	var wrong = function(){
		that.say("Wrong, I was expecting " + answer.toString() + ". It's the slammer for you.");
		that.say("PLAYER says: I do not consent!");
		that.say("Okay okay...chill. I'll give you another shot.");
		//notice here we recurse and call the same function again because it was wrong
		that.playerRespondTo(question, player, args, answer, nextQuestion);
	};
	
	this.waitForPlayerChoice(player, function(choice){
		//we have the choice in player and its a function
		console.log("picked " + choice);
		if(choice in player && typeof(player[choice]) === typeof(Function)){
			//we call the players choice here (with args)
			var playersAnswer = player[choice](args);
			if(playersAnswer){
				that.say("PLAYER says: " + playersAnswer.toString());
				//Right answer
				if(playersAnswer.toString() === answer.toString()){
					that.say("Lucky guess, I've got more questions....");
					nextQuestion();
				}
				//Wrong answer
				else{
					wrong();
				}
			}else{
				wrong();
			}
		}else{
			wrong();
		}
	});
};

game.prototype.waitForPlayerChoice = function(player, callback){
	//get player choices
	this.say("PLAYER: Your choices are: ")
	for (var key in player) {
		var val = player[key];
		//it is defined and is a function
		if(val && typeof(val) === typeof(Function)){
			this.say("- " + key);
		}
	}
	//get the player to select one of the options
	this.askQuestion("Which do you pick? ", callback);
};

