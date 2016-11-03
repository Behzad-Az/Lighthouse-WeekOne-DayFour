// This will add " is awesome!" to each of the elements in
// persons array.

// Input array.
var persons = ["Behzad","Sara","Jason"];

// my version of map - lines 8 to 16
var myOutputArry = [];
function myMap(inputArry, callBackFcn) {
  inputArry.forEach(callBackFcn);
  return myOutputArry;
}

function callBackFcn (person,index) {
  myOutputArry.push(person + " is awesome!");
}

// Javascripts' built in map function.
var cOutputArry = persons.map(function (element) {
  return element + " is awesome!";
});

//printing results
console.log("my code's results is: \n" + myMap(persons,callBackFcn));
console.log("Javascript's built-in map results is: \n" + cOutputArry);