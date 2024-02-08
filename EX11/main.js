// EX01 lấy kết quả giao giữa 2 mảng

// var arrA = [1, 4, 3, 2];
// var arrB = [5, 2, 6, 7, 1];

// var newArray = arrA.concat(arrB);

// var result = newArray.reduce(function (accumulator, value) {
//   if (accumulator.indexOf(value) === -1) {
//     accumulator.push(value);
//   }
//   return accumulator;
// }, []);

// console.log(result);

// EX02 làm phẳng mảng

// var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// var newArr = arr.flat().flat().flat();

// console.log(newArr);

// EX03 tách phần tử trong mảng theo đúng kiểu dữ liệu

// var arr = [
//   ["a", 1, true],
//   ["b", 2, false],
// ];

// var arrFlat = arr.flat();

// var result = arrFlat.reduce(
//   function (accumulator, value) {
//     if (typeof value == "number") {
//       accumulator[0].push(value);
//     } else if (typeof value == "string") {
//       accumulator[1].push(value);
//     } else if (typeof value == "boolean") {
//       accumulator[2].push(value);
//     }

//     return accumulator;
//   },
//   [[], [], []]
// );

// console.log(result);

// EX04
var arr = [
  {
    url: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    h2: "Tiêu đề bài viết 1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid et ipsum voluptates porro corrupti corporis nihil vel quibusdam, dolores laudantium.",
  },

  {
    url: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    h2: "Tiêu đề bài viết 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid et ipsum voluptates porro corrupti corporis nihil vel quibusdam, dolores laudantium.",
  },

  {
    url: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    h2: "Tiêu đề bài viết 3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid et ipsum voluptates porro corrupti corporis nihil vel quibusdam, dolores laudantium.",
  },
];

var newArr = arr.forEach(function (value) {
  console.log(value);
  document.querySelector("body").innerHTML += `
  <div>
    <img src = "${value.url}"></img>
    <h2>${value.h2}</h2>
    <p>${value.desc}</p>
    <hr>
  </div>
  
  `;
});

var img = document.querySelectorAll("img").forEach(function (value) {
  value.style.float = "left";
  value.style.width = "7%";
});
