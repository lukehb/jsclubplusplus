module.exports = new player();

function player() {}

player.prototype.reversabet = function (numChars) {
  var result = [];
  var i;
  for (i = 0; i < numChars; i++) {
    result.push(String.fromCharCode(122 - i));
  }
  return result;
}

player.prototype.triAreal = function (sideLength) {
  return sideLength * sideLength / 2 ;
}

player.prototype.fib = function (nth) {
  var n1 = 1;
  var n2 = 0;
  var num = 0;
  var i;
  for (i = 1; i < nth; i++) {
    num = n1 + n2;
    n2 = n1;
    n1 = num;
  }
  return num;
}

player.prototype.meaningOfLife = function () {
  return 42;
}

player.prototype.driversLicense = function () {
  return {
    name: "Derpface",
    dob: "01/01/1970"
  }
}

player.prototype.mult = function () {
  var result = 1;
  var i;
  for (i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
