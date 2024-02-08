// EX04 sắp sếp mảng số nguyên

// var numbers = [5, 1, 9, 8, 10];
// var element = 4;

// numbers.push(element);
// numbers.sort(function (a, b) {
//   return a - b;
// });
// alert(numbers);

// EX02 Trung bình các số nguyên tố trong mảng

var myArray = [1, 2, 4, 5, 6, 7, 8];

var arrayLength = myArray.length;

function isPrime(n) {
  var flag = 1;
  if (n < 2) {
    return (flag = 0);
  }
  var i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
    i++;
  }
  return flag;
}

var result = [];
for (i = 0; i < arrayLength; i++) {
  if (isPrime(myArray[i])) {
    result.push(myArray[i]);
  }
}

var primeResult = 0;
for (i = 0; i < result.length; i++) {
  primeResult += result[i];
}

console.log(primeResult / result.length);

// for (i = 0; i < arrayLength; i++) {
//   var sum = 0;
//   var isPrime = function () {
//     if (myArray[i] <= 1) {
//       return false;
//     } else if (myArray[i] == 2) {
//       return myArray[i];
//     } else {
//       for (j = 2; j < myArray[i]; j++) {
//         if (myArray[i] % j == 0) {
//           return false;
//         } else {
//           return myArray[i];
//         }
//       }
//     }
//   };
//   if (isPrime) {
//     sum += myArray[i];
//   }
// }

// console.log(sum);

// EX01 Cho trước mảng số nguyên, tìm số lớn nhất, nhỏ nhất trong mảng
// Max

// var array = [1, 2, 3, 4, 7, 9];

// // Max
// var max = array[0];
// var maxIndex = 0;
// for (i = 0; i < array.length; i++) {
//   if (max < array[i]) {
//     max = array[i];
//     maxIndex = i;
//   }
// }

// console.log(max, maxIndex);
// // Min

// var min = array[0];
// var minIndex = 0;
// for (i = 0; i < array.length; i++) {
//   if (min > array[i]) {
//     min = array[i];
//     minIndex = i;
//   }
// }

// console.log(min, minIndex);

// EX03 Lọc mảng có phần tử trùng nhau

// const array = [1, 2, 1, 3, 5, 4, 3, 6];

// var newArray = array.reduce(function (accumulator, element) {
//   if (accumulator.indexOf(element) === -1) {
//     accumulator.push(element);
//   }
//   return accumulator;
// }, []);

// console.log(newArray);
