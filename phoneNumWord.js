// get user argument
var arg = process.argv[2];
var numArry = arg.split('');

//a good input must carry chars in goodInput
const goodInput = "23456789";

//check for validity of input.
function isGoodInput (inputArr) {
  var validation = true;
  inputArr.forEach(function (item){
    if (!goodInput.includes(item)) {
      validation = false;
    }
  });
  return validation;
}

// phone number object
var phoneLetters = {
  2: ['a','b','c'],
  3: ['d','e','f'],
  4: ['g','h','i'],
  5: ['j','k','l'],
  6: ['m','n','o'],
  7: ['p','s','r'],
  8: ['t','u','v'],
  9: ['w','x','y'],
}

// if good input, execute all possible combinations
if (isGoodInput(numArry)) {
  var output = [];
  phoneLetters[numArry[0]].forEach(function (item1) {
    phoneLetters[numArry[1]].forEach(function (item2) {
      phoneLetters[numArry[2]].forEach(function (item3) {
        phoneLetters[numArry[3]].forEach(function (item4) {
          phoneLetters[numArry[4]].forEach(function (item5) {
            phoneLetters[numArry[5]].forEach(function (item6) {
              phoneLetters[numArry[6]].forEach(function (item7) {
                output.push(item1+item2+item3+item4+item5+item6+item7);
              })
            });
          });
        });
      });
    });
  });
  // print out number of combinations
  console.log(output.length);
  console.log(output);

} else { console.log("bad input!"); }


