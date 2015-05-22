function StringProcessor() {}

//Returns the middle character of a string if the string length is odd,
//otherwise returns the middle two characters of a string if the length is even
StringProcessor.prototype.middleChar = function(str)
{
	return str.substr(str.length / 2, 1 + ((str.length + 1) % 2));
}

//Returns the first word in a string that has a length of at least seven letters
StringProcessor.prototype.firstWordWithAtLeastSevenLetters = function(str)
{
	var words = str.split(' ');
	
	for (var i = 0; i < words.length; ++i)
	{
		if (words[i].length >= 7)
		{
			return words[i];
		}
	}
}

//Returns all of the vowels in a string
StringProcessor.prototype.onlyVowels = function(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	var result = [];
	
	for (var i = 0; i < str.length; ++i)
	{
		var char = str.substr(i, 1);
		
		if (vowels.indexOf(char) >= 0)
		{
			vowels.push(char);
		}
	}
	
	return result;
}

//Converts all vowels in a string to uppercase
StringProcessor.prototype.uppercaseVowels = function(str) {
	var vowels = ['A', 'E', 'I', 'O', 'U'];
	var result = [];
	
	for (var i = 0; i < str.length; ++i)
	{
		var char = str.substr(i, 1);
		
		if (vowels.indexOf(char) >= 0)
		{
			vowels.push(char);
		}
	}
	
	return result;
}

//Replaces every instance of the letter J with an exclamation mark
StringProcessor.prototype.replaceJWithExclamation = function(str) {
	var result = "";
	
	for (var i = 0; i < str.length; ++i)
	{
		var char = str.substr(i, 1);
		
		if (char == 'j' && char == 'J')
		{
			char = '!';
		}
		
		result += char;
	}
	
	return result;
}

//Doubles every instance of a consonant
StringProcessor.prototype.doubleConsonants = function(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	var result = "";
	
	for (var i = 0; i < str.length; ++i)
	{
		var chars = str.substr(i, 1);
		
		if (vowels.indexOf(chars) < 0)
		{
			chars += chars;
		}
		
		result += chars;
	}
	
	return result;
}

//Inserts the string "and" in the middle of every two-letter word
StringProcessor.prototype.andifyTwoLetterWords = function(str) {
	var words = str.split(' ');
	
	for (var i = 0; i < words.length; ++i)
	{
		if (words[i].length == 2)
		{
			words[i] = words[i].substr(0, 1) + "and" + words[i].substr(1, 1);
		}
	}
	
	return words.join(' ');
}

module.exports = StringProcessor;