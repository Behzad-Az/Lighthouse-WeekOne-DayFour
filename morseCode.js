// Get argument as a single string, convert all to upper case
// split into char array.
var arg = process.argv[2].toUpperCase();
var chrArry = arg.split('');

// define morse code object.
var morseCodeObj = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "   "
}

// start with empty output string
var output = "";

// add morse Morse code equivalant for each character
// for characters not in morseObject, return '[that character]'
// two spaces between each letter of the word
// five spaces between each word
for (item of chrArry) {
  output += morseCodeObj[item] !== undefined ?
                                   morseCodeObj[item] + "  " : "'"+item+"'  ";
}
// remove extra space at end of output
output = output.substring(0, output.length - 1);
console.log(output);




