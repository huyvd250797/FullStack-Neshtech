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
  if (weightInput.length == 0) {
    alert("Enter Weight");
  } else if (weightInput < 30 || weightInput > 500) {
    alert("Weight must be between 30kg and 500kg");
  } else if (heightInput.length == 0) {
    alert("Enter Height");
  } else if (heightInput < 0.5 || heightInput > 3) {
    alert("Height must be between 0.5m and 3m");
  } else {
    calBMI(weightInput, heightInput);
  }
};

const calBMI = (weight, height) => {
  let bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
  let resultBMI = "";
  let styleBMI = "";
  if (bmi < 18.5) {
    resultBMI = "UnderWeight";
    styleBMI = "red";
  } else if (bmi >= 18.5 && bmi < 25) {
    resultBMI = "Normal";
    styleBMI = "rgb(0, 161, 0)";
  } else if (bmi >= 25 && bmi < 30) {
    resultBMI = "OverWeight";
    styleBMI = "rgb(161, 161, 0)";
  } else if (bmi >= 30) {
    resultBMI = "Obese";
    styleBMI = "rgb(126, 0, 0)";
  }
  document.getElementById("resultBMI").innerHTML = `<b>BMI</b>: ${bmi
    .toFixed(2)
    .toString()} kg/m² (<span style="color:${styleBMI};font-weight:700">${resultBMI}</span>)`;
};

//! Dùng preventDefault() cho input type="submit"
document.getElementById("cal-bmi").addEventListener("click", function (e) {
  e.preventDefault();
});

// ------------------------------------ - ----------------------------------- */

//* 4. Viết một ứng dụng cho phép tính được số ngày trong một tháng (using switch case)
// VD: Tháng 1 có 31 ngày, tháng 2 có 28 hoặc 29 ngày

const DaysOfMonth = () => {
  let getMonths = document.getElementById("inputMonth").value;
  let days;
  if (getMonths.length == 0) {
    alert("Enter Months to Search");
  } else if (getMonths < 1 || getMonths > 12) {
    alert("Month must be between 1 and 12");
  } else {
    switch (parseInt(getMonths)) {
      // Các tháng có 31 ngày
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 21:
        days = 31;
        break;

      // Các tháng có 30 ngày
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;

      // Tháng 2
      case 2:
        days = 28;

      default:
        break;
    }
  }
  if (days == 28) {
    document.getElementById(
      "DayofMonth"
    ).innerHTML = `Month: ${getMonths} is ${days} or ${days + 1} days`;
  } else if (days.length != 0) {
    document.getElementById(
      "DayofMonth"
    ).innerHTML = `Month: ${getMonths} is ${days} days`;
  }
};

//! Dùng preventDefault() cho input type="submit"
document.getElementById("daysofmonth").addEventListener("click", function (e) {
  e.preventDefault();
});

// ------------------------------------ - ----------------------------------- */

//* 6. Viết ứng dụng vui có tên "Do You Love Me"
// Click vào Yes ==> I love You too, di chuột đến No thì nhảy sang vị trí khác

const moveRandPosition = () => {
  // get btn-no
  let getBtnNo = document.getElementById("btn-no");

  // get area moving
  let getArea = document.getElementById("movingRandPosition");
  // set default
  getBtnNo.style.position = "relative";
  getBtnNo.style.left = "0px";
  getBtnNo.style.top = "0px";

  // get height that btn-no can move
  let heightScr = getArea.innerHeight;
  // get width that btn-no can move
  let widthScr = getArea.innerWidth;

  console.log(heightScr, widthScr);
  // moving to random position in area
  getBtnNo.style.left =
    parseInt(getBtnNo.style.left) + Math.random() * 15 + "rem";
  getBtnNo.style.top =
    parseInt(getBtnNo.style.top) + Math.random() * 15 + "rem";
};

const clickedBtnYes = () => {
  document.getElementById("yes-i-do").innerHTML = `Yes I Do 💕 `;
};

// ------------------------------------ - ----------------------------------- */

//* 11. Viết chương trình tính thuế thu nhập cá nhân.

const getInCome = () => {
  // get thu nhập tính thuế nhập vào
  let inComeTaxes = document.getElementById("income-taxes").value;

  // bậc thuế
  let taxBracket;
  // Thuế suất
  let taxRate;
  // Thuế TNCN
  let tax;
  // Net income
  let netIncome;

  if (inComeTaxes.length == 0) {
    alert("Enter your Income Taxes!!!");
  } else if (inComeTaxes > 1000 && inComeTaxes <= 5000000) {
    taxBracket = 1;
    taxRate = 5;
  } else if (inComeTaxes > 5000000 && inComeTaxes <= 10000000) {
    taxBracket = 2;
    taxRate = 10;
  } else if (inComeTaxes > 10000000 && inComeTaxes <= 18000000) {
    taxBracket = 3;
    taxRate = 15;
  } else if (inComeTaxes > 18000000 && inComeTaxes <= 32000000) {
    taxBracket = 4;
    taxRate = 20;
  } else if (inComeTaxes > 32000000 && inComeTaxes <= 52000000) {
    taxBracket = 5;
    taxRate = 25;
  } else if (inComeTaxes > 52000000 && inComeTaxes <= 80000000) {
    taxBracket = 6;
    taxRate = 30;
  } else if (inComeTaxes > 80000000) {
    taxBracket = 7;
    taxRate = 35;
  } else {
    alert("Income Taxes must be greater 1000");
  }

  // Khai báo biến format to VND
  let taxFormatVND;
  let netFormatVND;
  let incomeFormatVND;

  //? Thuế TNCN = Thuế suất / 100 * Thu nhập tính thuế
  tax = (parseInt(taxRate) / 100) * parseInt(inComeTaxes);
  // Format to VND
  taxFormatVND = tax.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });

  //? Thực lãnh = Thu nhập tính thuế - TNCN
  netIncome = inComeTaxes - tax;
  // Format to VND
  netFormatVND = netIncome.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });

  // Gán giá trị vào value của Input
  incomeFormatVND = parseInt(inComeTaxes).toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  console.log(incomeFormatVND, netFormatVND);
  document.getElementById("income-taxes").value = incomeFormatVND;
  document.getElementById("tax-bracket").value = taxBracket;
  document.getElementById("tax-rate").value = `${taxRate}%`;
  document.getElementById("net-income").value = `${netFormatVND}`;
  document.getElementById("tax").innerHTML = `Your tax: ${taxFormatVND}`;
};

//! Dùng preventDefault() cho input type="submit"
document.getElementById("cal-taxes").addEventListener("click", function (e) {
  e.preventDefault();
});

// ------------------------------------ - ----------------------------------- */

//* 12. Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu,
// số tháng cho vay và lãi xuất hàng tháng.

// Hàm get Deposit Term, onchange khi thay đổi sẽ lấy giá trị thay đổi
const getDepositTerm = () => {
  // get value select
  let depositTerm = document.getElementById("select-term").value;
  // Khai báo biến lãi suất
  let depositInterest = 0;
  //? Nếu lãi value deposti term = 1 hoặc = 2, thì lãi suất là 1.6%
  if (depositTerm == 30 || depositTerm == 60) {
    depositInterest = 1.6;
  } else if (depositTerm == 90) {
    depositInterest = 1.9;
  } else if (depositTerm == 180 || depositTerm == 270) {
    depositInterest = 2.9;
  } else if (depositTerm == 365) {
    depositInterest = 4.6;
  } else if (depositTerm != 0) {
    depositInterest = 4.7;
  }

  // gán vào value DIR (%)
  document.getElementById("deposit-interest-rate").value = depositInterest;
};

// hàm check Unable edit deposit-interest-rate
const editDepositInterest = () => {
  let checkbox = document.getElementById("unableEdit-dir");
  let unableDIR = document.getElementById("deposit-interest-rate");

  // khi thay đổi check or no check, lắng nghe sự kiện thay đổi
  checkbox.addEventListener("change", (e) => {
    //? Nếu checked thì disabled = false
    if (e.currentTarget.checked) {
      // unableDIR.removeAttribute("disabled");
      unableDIR.disabled = false;
    }
    //? Nếu no checked thì disabled = true
    else {
      unableDIR.disabled = true;
    }
  });
};

// Hàm tính lãi suất và thực nhận sau kỳ hạn
const calDepositInterest = () => {
  // get giá trị depositTerm
  let depositTerm = document.getElementById("select-term").value;

  // get giá trị amount
  let depositAmount = document.getElementById("deposit-amount").value;

  // get giá trị DIR
  let getDepositInterest = document.getElementById(
    "deposit-interest-rate"
  ).value;

  // Khai báo biến lãi suất trong kỳ hạn
  let amountInterest;

  // Khai báo biến tổng nhận trong kỳ hạn
  let totalAmount;

  // Tính lãi suất
  amountInterest =
    (((depositAmount * getDepositInterest) / 100) * depositTerm) / 365;

  // Tính tổng nhận
  totalAmount = parseFloat(depositAmount) + parseFloat(amountInterest);

  //! toLocaleString(): ngăn cách hàng ngàn, chục, trăm, đơn vị bằng dấu ,
  let totalAmountVND = totalAmount.toLocaleString();
  let amountInterestVND = amountInterest.toLocaleString();
  let depositAmountVND = parseInt(depositAmount).toLocaleString();

  document.getElementById("total-amount").value = totalAmountVND;

  document.getElementById(
    "amount-interest"
  ).innerHTML = `Amount Interest: ${amountInterestVND} VND`;

  document.getElementById("deposit-amount").value = depositAmountVND;
};

function refresh() {
  let form = document.getElementById("formDepositInterest");
  form.reset();
}

//! Dùng preventDefault() cho input type="submit"
document.getElementById("cal-interest").addEventListener("click", function (e) {
  e.preventDefault();
});

//* -------------------------------------------------------------------------- */
//*                                    LOOP                                    */
//* -------------------------------------------------------------------------- */

//* 3. Thực hành  Viết chương trình nhập vào một số bất kỳ lớn hơn 0.
// Tính tổng các phần tử từ 1 đến số vừa nhập vào.

const getIntegerNumber = () => {
  let integeNum = document.getElementById("enterIntegerNumber").value;

  let sum = 0;
  if (integeNum.length == 0) {
    alert("Enter Integer Number");
  } else {
    for (let i = 1; i <= parseInt(integeNum); i++) {
      sum += i;
    }
    console.log(sum);
    document.getElementById(
      "resultTotal"
    ).innerHTML = `Total <b>1 → ${integeNum}</b> = <span style="color:red;font-weight:700">${sum}</span>`;
  }
};

//! Dùng preventDefault() cho input type="submit"
document
  .getElementById("cal-totalNumber")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });

//* 4.1: Viết chương trình nhận vào một số từ hộp thoại, việc nhập kết thúc khi người dùng nhập vào giá trị -1.
// Mỗi giá trị nhập được sẽ được hiển thị ra và thực hiện tính tổng các giá trị đó.
// Ví dụ: Nhập 2 => in ra 2, Nhập tiếp 5 => in ra 7 (2+5)
//TODO - Sử dụng While()
const getInputInNum = () => {
  // Khai báo biến và nhập số
  let inputNumIn = prompt("Enter a number: ");

  // Khai báo biến tổng
  let totalNum = 0;

  // nếu nhập -1 thì kết thúc vòng lặp
  while (inputNumIn != -1 && isNaN(inputNumIn) == false) {
    // Hiển thị dữ liệu vừa nhập bên trên
    alert("Added: " + inputNumIn);

    // Tính tổng
    totalNum += parseInt(inputNumIn);

    // Hiển thị giá trị tổng
    alert("Total = " + totalNum);

    // Sau đó tiếp tục hiển thị hộp thoại nhập dữ liệu
    inputNumIn = prompt("Enter a number: ");
  }
  // Hiển thị tổng cuối cùng
  alert("Final Total = " + totalNum);
};

/* ------------------------------------ - ----------------------------------- */

//* 4.2: Viết chương hình hiển thị thẻ <hr> theo độ rộng từ 1 đến 100.
// Kết quả sẽ được hiển thị hình tam giác hr có độ dài từ 1 -> 100.
let i = 1;
let striangle = "";
const createStriangle = () => {
  while (i < 100) {
    striangle += `<hr style="width:${i}%;margin:2px 0">`;
    // console.log(striangle);
    document.getElementById("striangle").innerHTML = striangle;
    i++;
  }
};

/* ------------------------------------ - ----------------------------------- */

//* 6: Tạo một table gồm 10 dòng và 10 cột.
// Sử dụng vòng lặp lồng nhau
let cell = "";
const createTable = () => {
  // Khai báo biến chứa table
  cell = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";

  for (i = 1; i <= 10; i++) {
    //! Thêm <tr></tr> dưới <table> để tạo row
    cell = cell + "<tr>";

    for (j = 1; j <= 10; j++) {
      //! trong row thêm td để tạo dữ liệu
      cell = cell + "<td>" + i * j + "</td>";
    }
    // sau khi tạo xong dữ liệu row đó, thêm thẻ đóng tr
    cell = cell + "</tr>";
  }
  // Khi hoàn tất thêm thẻ đóng table
  cell = cell + "</table>";
  document.getElementById("table10x10").innerHTML = cell;
};

//* -------------------------------------------------------------------------- */
//*                                    6. LOOP2                                */
//* -------------------------------------------------------------------------- */

/* ------------------------------------ - ----------------------------------- */

//* 1. Viết một ứng dụng để in ra trang web một bảng cửu chương
const multiplicationTable = () => {
  cell = "<table   cellspacing='5' cellpadding='15'>";
  // i sẽ là row => i sẽ tăng dần từ 1 -> 9
  // ! để i = 0 để thực hiện làm title cho bcc
  for (let i = 0; i <= 9; i++) {
    // tạo thẻ tr
    cell += `<tr class="tr-${i}">`;

    // Bảng cửu chương bắt đầu từ 2 -> j = 2, và kết thúc = 9
    for (let j = 2; j <= 9; j++) {
      // Nếu i == 0 thì sẽ thực hiện làm tiêu đề
      if (i == 0) {
        cell = cell + `<td class="td-${j}x">${j} x` + "</td>";
        document.getElementById("multiplicationTable").innerHTML = cell;
      } else {
        // Trong 1 hàng thì sẽ nhân 1 đầu tiên (i=1) và sau 9 lần sẽ tăng i lên
        // Và row thứ 2 sẽ nhân 2 ,...
        cell =
          cell +
          `<td class="td-${j}${i}">` +
          `${j} x ${i} = ` +
          j * i +
          "</td>";
      }
    }
    cell = cell + "</tr>";
  }
  cell = cell + "</table>";
  document.getElementById("multiplicationTable").innerHTML = cell;
};
