module.exports = new player();

function player()
{
	
}

player.prototype.reversabet = function(numChars)
{
	var results = [];
	
	for (var i = 0; i < numChars; ++i)
	{
		results.push(String.fromCharCode("z".charCodeAt(0) - i));
	}
	
	return results;
}

player.prototype.triAreal = function(sideLength)
{
	return sideLength * sideLength * 0.5;
}

player.prototype.fib = function(position)
{
	if (position <= 0)
	{
		return position;
	}
	else if (position == 1)
	{
		return position;
	}
	else
	{
		return this.fib(position - 1) + this.fib(position - 2);
	}
}

player.prototype.meaningOfLife = function()
{
	return 42;
}

player.prototype.driversLicense = function()
{
	return { "name":"Andrew", "dob":"1990" };
}

player.prototype.mult = function()
{
	var result = 1;
	
	for (var i = 0; i < arguments.length; ++i)
	{
		result *= arguments[i];
	}
	
	return result;
}