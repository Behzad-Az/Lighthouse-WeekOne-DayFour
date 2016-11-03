var wrapLog = function (callback, name) {
  /* your code here */
  return function() {
    var sum = 0;
    for (arg in arguments) {
      sum += arguments[arg];
    }
    console.log(sum);
    return sum;
  }
};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
logSum(-4,4); // sum(-4,4) => 0
logSum(1000, 1); // sum(1000,1) => 1001