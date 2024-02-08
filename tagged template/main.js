//Tagged template literals

function highlight([first, ...strings], ...values) {
  return values
    .reduce(
      (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
      [first]
    )
    .join();
}

var brand = "F8";
var course = "Javascript";

var html = highlight`Học lập trình ${course} tại ${brand} !`;
console.log(html);
