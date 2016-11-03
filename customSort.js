// Sort array of numbers numerically.
var arryOfNum = [1, 2, 5, -9, -10];
arryOfNum.sort(function (a,b) {
  return a-b;
});
console.log(arryOfNum);

// Sort students by name.
// if same name, sort by age descending.
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function (item1, item2){
  if (item1.name === item2.name) {
    return item2.age - item1.age;
  }
  else return item1.name > item2.name;
});
console.log(students);