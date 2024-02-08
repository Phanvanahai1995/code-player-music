var ages = [3, 10, 19, 20];

function myFunction() {
  var age = ages.find(function checkAdult(age) {
    return age >= 18;
  });
  console.log(age);
}

myFunction();
