// Spread

// VD1

// var array1 = ["js", "ruby", "php"];
// var array2 = ["reactJS", "Dart"];
// var array3 = [...array2, ...array1];

// console.log(array3);

// VD2

// var array = ["Javascript", "PHP", "Ruby"];
// function logger(a, b, c) {
//   console.log(a, b, c);
// }

// logger(...array);

// VD3

var array = [1, 2, 3, 4];

var [a, ...rest] = array;
console.log(a);
console.log(rest);
