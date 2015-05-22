var asciify = require('asciify');
var StringProcessor = require('./StringProcessor');
var processor = new StringProcessor();

//Prints the ASCII-art version of a string to stdout
function outputResult(str) {
	asciify(str, function(err, res){ console.log(res) });
}

//Our test suite
var tests = [
	['middleChar',                       "abc"],
	['middleChar',                       "abcd"],
	['firstWordWithAtLeastSevenLetters', "This is a magnificent sentence."],
	['firstWordWithAtLeastSevenLetters', "Super duper superlative"],
	['onlyVowels',                       "Fiery fiendish fiends"],
	['uppercaseVowels',                  "soulful sun"],
	['replaceJWithExclamation',          "Jolly joker"],
	['doubleConsonants',                 "Andy"],
	['andifyTwoLetterWords',             "An ent"]
]

//Run the test suite
for (var testIndex = 0; testIndex < tests.length; ++testIndex)
{
	var currTest = tests[testIndex];
	outputResult(processor[ currTest[0] ]( currTest[1] ));
}
