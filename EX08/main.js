// Checked

// document.getElementById("btn1").onclick = function () {
//   document.getElementById("checkbox1").checked = true;
// };

// document.getElementById("btn2").onclick = function () {
//   document.getElementById("checkbox1").checked = false;
// };

// VD2

// var like = document.querySelectorAll("input[type=checkbox]");

// document.getElementById("btn").onclick = function () {
//   var html = "";
//   for (i = 0; i < like.length; i++) {
//     if (like[i].checked) {
//       html += like[i].value;
//     }
//   }
//   alert(html);
// };

// VD3

// var action = document.getElementById("action");

// action.onclick = function () {
//   if (action.checked) {
//     alert("Bạn vừa chọn checkbox này");
//   } else {
//     alert("Bạn vừa bỏ chọn checkbox này");
//   }
// };

// VD4 thiết lập check all và uncheck all

// var checkAll = document.querySelectorAll("input[type=checkbox]");

// document.getElementById("btn1").onclick = function () {
//   for (i = 0; i < checkAll.length; i++) {
//     checkAll[i].checked = true;
//   }
// };

// document.getElementById("btn2").onclick = function () {
//   for (i = 0; i < checkAll.length; i++) {
//     checkAll[i].checked = false;
//   }
// };

// VD5

// var gender = document.querySelectorAll("input[type=radio]");

// document.querySelector("input[type=button]").onclick = function () {
//   var html = "";
//   for (i = 0; i < gender.length; i++) {
//     if (gender[i].checked) {
//       html = gender[i].value;
//     }
//   }
//   alert(html);
// };

// VD6

function genderChanged(obj) {
  var message = document.getElementById("show_message");
  var value = obj.value;
  if (value === "") {
    message.innerHTML = "Bạn chưa chọn giới tính";
  } else if (value === "nam") {
    message.innerHTML = "Bạn đã chọn giới tính nam";
  } else if (value === "nu") {
    message.innerHTML = "Bạn đã chọn giới tính nữ";
  }
}
