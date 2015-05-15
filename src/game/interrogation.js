///////////////////////////////////
//node style includes
///////////////////////////////////
//this is one we wrote
var game = require('./game');
//that snarky cop
var cop = require('./cop');
//the player
var player = require('./player');

//get him to ask a question
var greeting = 'Woah there! Do you know how fast you were typing?';
game.askQuestion(greeting, function(answer){
		
		//min inclusive, max exclusive random int
		//I don't have to put this here, but just showing
		//some stuff javascript can do
		var randInt = function(min, max){
			return Math.floor(Math.random() * (max - min)) + min;
		};
		
		
		//ask the new question
		var q1 = 'How dare you say, "' + answer + '" to me. ' 
		+ 'You must be drunk, how many have you had?';
		game.askQuestion(q1, function(answer){
			
			var num1 = randInt(1,10);
			var num2 = randInt(1,10);
			var q7 = 'Okay final thing, what\'s ' + num1 + " times " + num2 + " ?";
			var a7 = num1 * num2; 
			
			var q6 = 'Okay, enough is enough, show me your license.'
			var a6 = cop.testLicense();
			
			var q5 = 'You think you\'re pretty smart punk. What\'s the meaning of life?';
			var a5 = cop.testMeaning();
			
			var nthNumber = randInt(1,100);
			var q4 = 'You\'re slurring, I\'m not letting you go yet.' +
			'What\'s the nth fibonacci number (zero\'th based): ' + nthNumber;
			var a4 = cop.testNthFibNum(nthNumber);
			
			//question 3
			var triangleSideLength = randInt(1,100);
			var q3 = 'I can smell it on your breath, pretty sure you\'re drunk.' +
			'What\'s the area of an equilateral triangle with side length: ' + triangleSideLength;
			var a3 = cop.testEquiTriArea(triangleSideLength);
			
			//question 2
			var nLetters = randInt(1, 26);
			var q2 = 'I think you\'ve had more than that, I\'m gonna have to test you. ' +
			'What\'s the last ' + nLetters +' letters of the alphabet....starting from z?';
			var a2 = cop.testLastNLettersFromZ(nLetters);
			
			//this question actually starts the game state
			game.playerRespondTo(q2, player, nLetters, a2, function(){
				game.playerRespondTo(q3, player, triangleSideLength, a3, function(){
					game.playerRespondTo(q4, player, nthNumber, a4, function(){
						game.playerRespondTo(q5, player, nthNumber, a5, function(){
							game.playerRespondTo(q6, player, nthNumber, a6, function(){
								game.playerRespondTo(q7, player, nthNumber, a7, function(){
									game.say("You seem like a good guy, try typing in tayne...");
								});
							});
						});
					});
				});
			});
			
		});
	}
);

