module.exports = new player();

function player()
{

}

player.prototype.reversabet = function(numchar)
{
	var result = [];
	for(var i = "z".charCodeAt(0), j = 0; j < numchar; --i, ++j)
	{
		result.push(String.fromCharCode(i));
	}
	return result;
}

player.prototype.triAreal = function(length)
{
	return Math.pow(length, 2) /2;
}

player.prototype.fib = function(numb)
{
	var second = 1;
	var first = 1;
	var result = 0;
	
	for(var i = 0; i < numb; i++)
	{
		if ( i <= 1 )
			 result = i;
		else
		  {
			 result = first + second;
			 first = second;
			 second = result;
		  }
	}
	
	return result;
}

player.prototype.meaningOfLife = function()
{
	return 42;
}

player.prototype.driversLicense = function()
{
	return {
		name: "Celery Man",
		dob: 2015
	};
}

player.prototype.punchCop = function(){
	console.log("*punches*....it's not very effective.")
};

player.prototype.mult = function(){
	var result = 1;
	for(var arg = 0; arg < arguments.length; ++arg)
	{
		var arr = arguments[arg];
		result *= arr;
	}
	return result;
}
