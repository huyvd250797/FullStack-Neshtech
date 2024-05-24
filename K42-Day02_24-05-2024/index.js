//TODO K42 - Day02_24 - 05 - 2024
// const a = 100;
// switch (a) {
//   case 100:
//     console.log("Giá trị a = 100");
//   // break;
//   case 200:
//     console.log("Giá trị a = 200");
//     break;

//   case 300:
//     console.log("Giá trị a = 300");
//     break;

//   default:
//     console.log("Nothing");
//     break;
// }

// // Mảng 2 chiều
// const array2 = [
//   [1, 2, 3, 4, 5],
//   ["e", "r", "k"],
// ];

// // array2[0][3]  => [0]: phần tử đầu tiên (là mảng [1,2,3,4]),  [3]: vị trí thứ 3 của mảng [1,2,3,4]
// console.log(array2[0][3]);

// array2.push(["x", "y", "z"]);
// console.log(array2);

// const listStudent = [
//   { name: "Nguyen Van A", mail: "a@gmail.com" },
//   { name: "Nguyen Van B", mail: "B@gmail.com" },
// ];

// listStudent.map((student) => {
//   console.log(student);
// });

// TODO ------------------------------ Exercise ----------------------------- */
//* 1. Làm sử dụng sự kiện click chuột để di chuyển hình ảnh.
// Mỗi lần click hình ảnh sẽ được di chuyển sang trái/phải một khoảng cách.

//
let heli = document.getElementById("helicopter");
const getHelicopter = () => {
  // set style cho heli
  heli.style.position = "relative";
  heli.style.right = "0px";
  heli.style.top = "0px";
};

// move right
const heliMoveRight = () => {
  heli.style.right = parseInt(heli.style.right) - 20 + "px";
  heli.style.transform = "scaleX(-1)";
  heli.style.transition = "linear .5s";
};

// move left
const heliMoveLeft = () => {
  heli.style.right = parseInt(heli.style.right) + 20 + "px";
  heli.style.transform = "scaleX(1)";
  heli.style.transition = "linear .5s";
};

// move left
const heliMoveUp = () => {
  heli.style.top = parseInt(heli.style.top) - 20 + "px";
  heli.style.transform = "rotate(15deg)";

  heli.style.transition = "linear .5s";
};

// move left
const heliMoveDown = () => {
  heli.style.top = parseInt(heli.style.top) + 20 + "px";
  heli.style.transform = "rotate(-10deg)";

  heli.style.transition = "linear .5s";
};

// Gọi hàm getHelicopter() khi trình duyệt được tải lần đầu
window.onload = getHelicopter;

// ------------------------------------ - ----------------------------------- */

//* 2. Di chuyển hình ảnh nhân vật lên, xuống, sang trái, sang phải sử dụng các phím tương ứng.
// Việc này được thực hiện bằng cách thay đổi thuộc tính tọa độ của thẻ khi xử lý event.
let ironman = document.getElementById("ironman");

ironman.style.position = "relative";
ironman.style.right = "0px";
ironman.style.top = "0px";

// move right
const pressedKeyRight = () => {
  ironman.style.right = parseInt(ironman.style.right) - 30 + "px";
  ironman.style.transform = "scaleX(-1)";
  ironman.style.transition = "linear .5s";
};

// move left
const pressedKeyLeft = () => {
  let ironman = document.getElementById("ironman");

  ironman.style.right = parseInt(ironman.style.right) + 30 + "px";
  ironman.style.transform = "scaleX(1)";
  ironman.style.transition = "linear .5s";
};

// move left
const pressedKeyUp = () => {
  let ironman = document.getElementById("ironman");

  ironman.style.top = parseInt(ironman.style.top) - 30 + "px";
  ironman.style.transform = "rotate(10deg)";
  ironman.style.transition = "linear .5s";
};

// move left
const pressedKeyDown = () => {
  let ironman = document.getElementById("ironman");

  ironman.style.top = parseInt(ironman.style.top) + 30 + "px";
  ironman.style.transform = "rotate(-10deg)";
  ironman.style.transition = "linear .5s";
};

const moveSelection = (e) => {
  switch (e.keyCode) {
    // Key 39 = arrow right
    case 39:
      pressedKeyRight();
      break;

    // Key 37 = arrow left
    case 37:
      pressedKeyLeft();
      break;

    // Key 38 = arrow up
    case 38:
      pressedKeyUp();
      break;

    // Key 40 = arrow down
    case 40:
      pressedKeyDown();
      break;

    default:
      break;
  }
};

const start = () => {
  // Lắng nghe sự kiện nhấn phím xuống (keydown)
  window.addEventListener("keydown", moveSelection);
};

// ------------------------------------ - ----------------------------------- */

//* 3. Chỉ số khối cơ thể (Body mass index-BMI) là một thước đo sức khoẻ dựa trên cân nặng và chiều cao.
// Nó được tính bằng cách lấy cân nặng đơn vị tính kilogram chia cho bình phương của chiều cao đơn vị tính mét.
//? BMI = Weight / (Height²)

const getWHIput = () => {
  let weightInput = document.getElementById("weightInput").value;
  let heightInput = document.getElementById("heightInput").value;
  if (weightInput == "") {
    alert("Enter Weight");
  } else if (heightInput == "") {
    alert("Enter Height");
  } else {
    calBMI(weightInput, heightInput);
  }
};

const calBMI = (weight, height) => {
  let bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
  let resultBMI = "";
  if (bmi < 18.5) {
    resultBMI = "UnderWeight";
  } else if (18.5 <= bmi < 25) {
    resultBMI = "Normal";
  } else if (25 <= bmi < 30) {
    resultBMI = "OverWeight";
  } else if (30 <= bmi) {
    resultBMI = "Obese";
  }
  document.getElementById("resultBMI").innerHTML = `BMI: ${bmi
    .toFixed(2)
    .toString()} kg/m² (${resultBMI})`;
};
