// function soNguyenDuong(x) {
//   if (Number.isInteger(x) && x > 0) {
//     console.log(x);
//   } else {
//     console.log("Không phải số nguyên dương");
//   }
// }

// soNguyenDuong(5.5);

// function soNguyenDuong(x) {
//   if (x % 1 == 0 && x > 0) {
//     console.log(x);
//   } else {
//     console.log("Không phải số nguyên dương");
//   }
// }

// soNguyenDuong(5.0);

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(3, 4);

// function sumArray(array) {
//   let sum = 0;
//   array.forEach(function (x) {
//     sum += x;
//   });
//   return sum;
// }

// var array = [1, 2, 3, 4];

// console.log(sumArray(array));

// var array = [1, 2, 3, 4];
// var sum = 0;
// var arrayLength = array.length;
// for (var i = 0; i < arrayLength; i++) {
//   sum += array[i];
// }

// console.log(sum);

//Giải phương trình bậc 1
// x + a = b

// function giaiPT(a, b) {
//   var x = 0;
//   if (a != 0) {
//     x = -b / a;
//     console.log(x);
//   } else {
//     console.log("phương trình vô nghiệm");
//   }
// }

// giaiPT(2, 5);

// var button = document.getElementById("giaiBtn");
// button.onclick = function () {
//   let a = document.getElementById("a").value;
//   let b = document.getElementById("b").value;
//   document.getElementById("result").innerHTML = Number(a) * Number(b);
// };

// Số nguyên tố

// function soNguyenTo(n) {
//   if ((n == 0) | (n == 1)) {
//     alert("Không phải số nguyên tố");
//   } else if (n == 2) {
//     alert("Là số nguyên tố");
//   } else {
//     for (i = 2; i < n; i++) {
//       if (n % i != 0) {
//         alert("Là số nguyên tố");
//         break;
//       } else {
//         alert("Không phải số nguyên tố");
//         break;
//       }
//     }
//   }
// }

// soNguyenTo(6);

// Bài tập vòng lặp for

// function print_number() {
//   var number = document.getElementById("number").value;
//   number = parseInt(number);
//   var html = "";
//   for (i = 1; i <= number; i++) {
//     html += i + "</br>";
//   }

//   document.getElementById("result").innerHTML = `${html}`;
// }

// console.log(divItem[0]);

// function change_background() {
//   var divItem = document.querySelectorAll("div");
//   for (i = 0; i < divItem.length; i++) {
//     if (i % 2 == 0) {
//       divItem[i].style.background = "red";
//     } else {
//       divItem[i].style.background = "green";
//     }
//   }
// }

// function sum(n) {
//   var i = 0;
//   var sum = 0;
//   while (i <= n) {
//     if (i % 2 == 0) {
//       sum += i;
//     }
//     i++;
//   }

//   console.log(sum);
// }

// sum(10);

// Xóa đi các thẻ div có vị trí chẵn

// function deleteElement() {
//   var div = document.querySelectorAll("div");
//   var remove = document.querySelector("button");
//   var divLength = div.length;
//   remove.onclick = function () {
//     var i = 0;
//     while (i < divLength) {
//       if (i % 2 != 0) {
//         div[i].remove();
//       }
//       i++;
//     }
//   };
// }

// var array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// var arrayLength = array.length;

// function sumArray(array) {
//   var sum = 0;
//   for (i = 0; i < arrayLength; i++) {
//     if (array[i] % 2 != 0) {
//       sum += array[i];
//     }
//   }
//   console.log(sum);
// }

// sumArray(array);

// function sum(n) {
//   var sum = 0;
//   for (i = 1; i <= n; i++) {
//     sum += i / n;
//   }
//   console.log(sum);
// }

// sum(4);

// function hideMenuDropDown() {
//   var hideLi = document.querySelectorAll("#dropdown li");
//   var hideUl = document.querySelectorAll("#dropdown ul");
//   for (i = 0; i < hideLi.length; i++) {
//     hideLi[i].onclick = function () {
//       for (j = 0; j < hideUl.length; j++) {
//         hideUl[j].style.display = "none";
//       }

//       this.children[1].style.display = "block";
//     };
//   }
// }

// var bgcRed = document.querySelector("#btn1");
// var bgcGreen = document.querySelector("#btn2");
// var contentBgc = document.querySelector("#content");

// btn1.onclick = function () {
//   contentBgc.style.background = "red";
// };

// btn2.onclick = function () {
//   contentBgc.style.background = "green";
// };

// var img1 = document.querySelector("#btn1");
// var img2 = document.querySelector("#btn2");
// var img = document.querySelector("div img");

// btn1.onclick = function () {
//   img.src =
//     "https://freetuts.net/upload/tut_post/images/2016/09/27/746/typescript-basic-types.gif";
// };

// btn2.onclick = function () {
//   img.src =
//     "https://freetuts.net/upload/tut_post/images/2017/03/29/810/quan-ly-ten-mien-trong-direct-admin.gif";
// };

// var hiddenDiv = document.querySelector("#btn1");
// var hideDiv = document.querySelector("#btn2");

// hiddenDiv.onclick = function () {
//   document.querySelector("div").style.display = "none";
// };

// hideDiv.onclick = function () {
//   document.querySelector("div").style.display = "block";
// };

// function show_search_advance() {
//   // Lấy thẻ a và category
//   var a = document.getElementById("show_search_advance");
//   var category = document.getElementById("search_advance");

//   // Lấy nội dung của thẻ a
//   var text = a.innerHTML;

//   // Kiểm tra xử lý hiển thị và ẩn + đổi nội dung thẻ a

//   if (text === "Tìm kiếm nâng cao") {
//     category.style.display = "table-row";
//     a.innerHTML = "Bỏ tìm kiếm nâng cao";
//   } else {
//     category.style.display = "none";
//     a.innerHTML = "Tìm kiếm nâng cao";
//   }

//   // Return false để khi click vào thẻ a sẽ không bị chuyển trang
//   return false;
// }

// Xóa dữ liệu HTML

// function deleteD() {
//   var button = document.getElementsByTagName("input");
//   for (var i = 0; i < button.length; i++) {
//     button[i].onclick = function () {
//       var parent = this.parentElement.parentElement;
//       parent.remove();
//     };
//   }
// }

// deleteD();

//Form

function getSelectInput(id) {
  return document.getElementById(id).value.trim();
}

function showError(key, mess) {
  return (document.getElementById(key + "_error").innerHTML = mess);
}

function validate() {
  var flag = true;
  //   username
  var username = getSelectInput("username");
  if (
    username == "" ||
    username.length < 5 ||
    !/^[a-zA-Z0-9]+$/.test(username)
  ) {
    flag = false;
    showError("username", "Vui lòng kiểm tra lại Username");
  }
  //   password
  var password = getSelectInput("password");
  if ((password = "" || password.length < 8)) {
    flag = false;
    showError("password", "Vui lòng kiểm tra lại Password");
  }
  //  Repeat password

  var rePassword = getSelectInput("repassword");
  if (rePassword != password) {
    flag = false;
    showError("repassword", "Vui lòng kiểm tra lại Password");
  }

  // Phone
  var phone = getSelectInput("phone");
  if (!"" && !/^[0-9]{10}$/.test(phone)) {
    flag = false;
    showError("phone", "Vui lòng kiểm tra lại số điện thoại");
  }

  // Email
  var email = getSelectInput("email");
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!mailformat.test(email)) {
    flag = false;
    showError("email", "Vui lòng kiểm tra lại email");
  }

  // Email
  var address = getSelectInput("address");

  if ((address = "" || address.length < 10)) {
    flag = false;
    showError("address", "Vui lòng kiểm tra lại address");
  }

  return flag;
}
