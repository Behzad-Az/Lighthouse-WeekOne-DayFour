// CountdownGenerator Exercise
var countdownGenerator = function (counter) {
  var output = "";
  return function () {
    if (counter > 0) console.log("T-minus " + counter + "...");
    else if (counter === 0) console.log("Blast Off!");
    else console.log("Rockets already gone, bub!");
    counter -= 1;
    return counter;
  }
};
var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!



// // Original Code of Next ID
// var nextId = (function () {
//   var id = 0;

//   return function () {
//     id += 1;
//     return id;
//   }
// })();
// console.log(nextId()); // 1
// console.log(nextId()); // 2



// // My interpertation of Original Code of Next ID
// console.log("Before function creation");
// var nextId;
// nextId = function () {
//   var id;
//   id = 0;
//   console.log("Setting Id to: " + id);
//   return function () {
//     id += 1;

//     console.log("Setting Id NOW to: " + id);
//     return id;
//   }
// };
// console.log("After function creation");
// var changeNumber = nextId();
// console.log(changeNumber()); // 1
// console.log(changeNumber()); // 2



// Loaded Dice Exercise
// var loadedDie = (function () {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   /* your code here */
//   var i = -1;
//   return function() {
//     i++;
//     return list[i];
//   }
// })();
// console.log(loadedDie());  // 5
// console.log(loadedDie());  // 4
// console.log(loadedDie());  // 6