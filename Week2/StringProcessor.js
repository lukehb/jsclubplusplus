function StringProcessor() {}

//Returns the middle character of a string if the string length is odd,
//otherwise returns the middle two characters of a string if the length is even
StringProcessor.prototype.middleChar = function(str)
{
	if (str.length % 2 == 0) {
		return str.substr( Math.floor(str.length / 2) - 1, 2 );
	}
	else {
		return str.substr( Math.floor(str.length / 2), 1 );
	}
}

//Returns the first word in a string that has a length of at least seven letters
StringProcessor.prototype.firstWordWithAtLeastSevenLetters = function(str)
{
	var matches = str.match(/([a-z|A-Z]{7,})/);
	return matches[1];
}

//Returns all of the vowels in a string
StringProcessor.prototype.onlyVowels = function(str) {
	return str.match(/[aeiouAEIOU]/g).join('');
}

//Converts all vowels in a string to uppercase
StringProcessor.prototype.uppercaseVowels = function(str) {
	return str.replace(/[aeiouAEIOU]/g, function(s) { return s.toUpperCase(); });
}

//Replaces every instance of the letter J with an exclamation mark
StringProcessor.prototype.replaceJWithExclamation = function(str) {
	return str.replace('j', '!').replace('J', '!');
}

//Doubles every instance of a consonant
StringProcessor.prototype.doubleConsonants = function(str) {
	return str.replace(/[^aeiouAEIOU]{1}/g, '$&$&');
}

//Inserts the string "and" in the middle of every two-letter word
StringProcessor.prototype.andifyTwoLetterWords = function(str) {
	return str.replace(/\b([a-z|A-Z])([a-z|A-Z])\b/g, "$1and$2");
}

module.exports = StringProcessor;