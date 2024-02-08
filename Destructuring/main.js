//destructuring
// Rest parameters: ...

//VD1

// var array = ["Js", "PHP", "Ruby"];

// var [a, ...rest] = array;

// console.log(a);
// console.log(rest);

//VD2

var course = {
  name: "JS",
  price: 1000,
};

var { name, price } = course;
console.log(name, price);
