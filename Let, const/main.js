// Let, const

// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let: Assignment

// Code block: if else,  loop, {}, ...

// Code thuần: var
// Babel: Const, Let
//- Khi định nghĩa biến và không gán lại biến đó: const
//-Khi cần gán lại giá trị cho biến: Let

// 3. Template literals

// const courseName = "Javascript";
// const description = `Course name: ${courseName} `;

// console.log(description);

//Multi-line String

// const lines = `Line 1
// Line 2
// Line 3`;

// console.log(lines);

// 4. Arrow function

// const sum = (a, b) => a + b;
// console.log(sum(2, 3));

// const course = {
//   name: "Javascript basic",
//   getName: function () {
//     return this.name;
//   },
// };

// console.log(course.getName());

const Course = function (name, price) {
  this.name = name;
  this.price = price;
};

const jsCourse = new Course("Javascript", 100);

console.log(jsCourse);
