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
// số tháng cho vay và lãi suất hàng tháng.

//! Khai báo biến global kỳ hạn gửi
let depositTerm;

// Hàm get Deposit Term, onchange khi thay đổi sẽ lấy giá trị thay đổi
const getDepositTerm = () => {
  // get value select
  depositTerm = document.getElementById("select-term").value;
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

  // gán vào value APY (%)
  document.getElementById("deposit-interest-rate").value = depositInterest;
};

// hàm check Unable edit deposit-interest-rate
const editDepositInterest = () => {
  let checkbox = document.getElementById("unableEdit-apy");
  let unableAPY = document.getElementById("deposit-interest-rate");

  // khi thay đổi check or no check, lắng nghe sự kiện thay đổi
  checkbox.addEventListener("change", (e) => {
    //? Nếu checked thì disabled = false
    if (e.currentTarget.checked) {
      // unableAPY.removeAttribute("disabled");
      unableAPY.disabled = false;
    }
    //? Nếu no checked thì disabled = true
    else {
      unableAPY.disabled = true;
    }
  });
};

// */ -------------------------------------------------------------------------- */
// */                              Hàm tính lãi suất                             */
// */ -------------------------------------------------------------------------- */
const calInterestRate = () => {
  let atMaturityReward = document.getElementById("atMaturity");
  let dailyReward = document.getElementById("rewardDaily");

  // Nếu như chọn hình thức trả lãi cuối kỳ (atMaturityReward checked)
  if (atMaturityReward.checked == true) {
    // Gọi hàm calDepositInterestMaturity
    calDepositInterestMaturity();
  } else {
    // Ngược lại nếu chọn hình thức daily
    // Gọi hàm calDepositInterestDaily
    calDepositInterestDaily();
  }
};

// Hàm tính lãi suất và thực nhận mỗi ngày (trả lãi hằng ngày & lãi nhập gốc)
//* Daily
const calDepositInterestDaily = () => {
  // get giá trị depositTerm
  let depositTerm = document.getElementById("select-term").value;

  // get giá trị amount
  // let depositAmount = document.getElementById("deposit-amount").value;
  depositAmount = focusDepositAmount();

  // get giá trị APY
  let getDepositInterest = document.getElementById(
    "deposit-interest-rate"
  ).value;

  // Khai báo biến lãi suất trong kỳ hạn
  let amountInterest = 0;

  // Khai báo biến tổng nhận trong kỳ hạn
  let totalAmount;

  // Khai báo biến tổng lãi hằng ngày nhận trong kỳ hạn
  let totalAmountInterest = 0;

  // Khai báo biến lịch sử nhận lãi hằng ngày
  let createDailyReward = "";

  //*? -------------------------------------------------------------------------- */
  //*?                           Công thức tính                                   */

  // vòng lặp chạy trong kỳ hạn
  for (let i = 1; i <= depositTerm; i++) {
    // Lãi suất hằng ngày
    amountInterest = (((depositAmount * getDepositInterest) / 100) * 1) / 365;

    // Tổng nhận cộng dồn hằng ngày
    totalAmount = parseFloat(depositAmount) + parseFloat(amountInterest);

    // Tổng lãi suất cộng dồn hằng ngày
    totalAmountInterest += amountInterest;

    // Tổng vốn cộng dồn hằng ngày
    depositAmount = parseFloat(depositAmount) + parseFloat(amountInterest);
    createDailyReward += `
  <div
    class="daily-interest d-flex justify-content-between p-3 border-bottom border-secondary-subtle"
  >
    <div class="date">Day ${i}
    <div class="cumulative-interest-text">Cumulative Interest</div>
    </div>
    
    <div class="amount-interest">+${amountInterest.toLocaleString(
      "en-US",
      {}
    )} VND
    <div class="cumulative-interest-value">${totalAmountInterest.toLocaleString(
      "en-US",
      {}
    )} VND </div>
    </div>
    
  </div>
  `;
  }
  document.getElementById("totalInterest").innerHTML = `
  <div
    class="title-interest-container d-flex justify-content-between p-3 border-secondary-subtle bg-secondary-subtle bg-opacity-10"
  >
    <div class="fw-bold">Total Interest
    </div>
    <div class="fw-bold">${totalAmountInterest.toLocaleString("en-US", {})} VND 
    </div>
  </div>
  `;
  document.getElementById("container-modal-content").innerHTML =
    createDailyReward;

  //*? -------------------------------------------------------------------------- */

  //! toLocaleString(): ngăn cách hàng ngàn, chục, trăm, đơn vị bằng dấu ,
  let totalAmountVND = totalAmount.toLocaleString();
  let amountInterestVND = totalAmountInterest.toLocaleString();

  document.getElementById("total-amount").value = totalAmountVND;

  document.getElementById("amount-interest").innerHTML = `
  Amount Interest: ${amountInterestVND} VND - 
    <!-- Button trigger modal -->
    <span
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#videwDeailInterestModal"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="View detail"
    >
      <i class="fa-regular fa-calendar-days"></i>
    </span>`;

  document.getElementById("deposit-amount").value = blurDepositAmount();
};

// Hàm tính lãi suất và thực nhận sau kỳ hạn (trả lãi cuối kỳ)
//* At Maturity
const calDepositInterestMaturity = () => {
  // get giá trị depositTerm
  let depositTerm = document.getElementById("select-term").value;

  // get giá trị amount
  // let depositAmount = document.getElementById("deposit-amount").value;
  depositAmount = focusDepositAmount();

  // get giá trị APY
  let getDepositInterest = document.getElementById(
    "deposit-interest-rate"
  ).value;

  // Khai báo biến lãi suất trong kỳ hạn
  let amountInterest;

  // Khai báo biến tổng nhận trong kỳ hạn
  let totalAmount;

  //*? -------------------------------------------------------------------------- */
  //*?                           Công thức tính                                   */
  // Tính lãi suất
  amountInterest =
    (((depositAmount * getDepositInterest) / 100) * depositTerm) / 365;

  // Tính tổng nhận
  totalAmount = parseFloat(depositAmount) + parseFloat(amountInterest);

  //*? -------------------------------------------------------------------------- */

  //! toLocaleString(): ngăn cách hàng ngàn, chục, trăm, đơn vị bằng dấu ,
  let totalAmountVND = totalAmount.toLocaleString();
  let amountInterestVND = amountInterest.toLocaleString();

  document.getElementById("total-amount").value = totalAmountVND;

  document.getElementById(
    "amount-interest"
  ).innerHTML = `Amount Interest: ${amountInterestVND} VND`;

  document.getElementById("deposit-amount").value = blurDepositAmount();
};

// Khai báo biến chứa value Int depositAmount;
let depositAmount = 0;
// Hàm format input deposit amount

//! Hàm focus input
const focusDepositAmount = () => {
  depositAmount = document.getElementById("deposit-amount").value;

  //! depositAmount.replace(/\D/g, "") --> convert toLocaleString ==> number
  // VD: 10,000 --> 10000
  let convertToNum = depositAmount.replace(/\D/g, "");
  document.getElementById("deposit-amount").value = convertToNum;
  return convertToNum;
};

//! Hàm blur input
const blurDepositAmount = () => {
  let getValueDeposit = document.getElementById("deposit-amount").value;
  getValueDeposit.replace(/,/g, "");
  let getFormat = parseInt(getValueDeposit).toLocaleString("en-US", {});

  if (getValueDeposit.length == 0) {
    document.getElementById("deposit-amount").value = "";
  } else {
    document.getElementById("deposit-amount").value = getFormat;
  }
  return getFormat;
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
    cell += "</tr>";
  }
  cell += "</table>";
  document.getElementById("multiplicationTable").innerHTML = cell;
};

/* ------------------------------------ - ----------------------------------- */

//* 2. Ứng dụng cho phép hiển thị n số nguyên tố đầu tiên

//? Hàm check số nguyên tố
function checkPrime(num) {
  // khai báo biến isPrime và gán cờ = 1 nếu là số nguyên tố
  var isPrime = 1;

  // số nguyên tố là số lớn hơn 2, nếu < 2 => không phải là số nguyên tố
  if (num < 2) {
    isPrime = 0;
  } else {
    //  Chạy i từ 2 -> i < num, vì nếu chạy đến n tức là i = n => n % n == 0
    //! => phải trừ trường hợp i = n
    for (let i = 2; i < num; i++) {
      // số nguyên tố chỉ có thể chia hết cho 1 và chính nó.
      //! nếu chia được cho một trong các số từ 2 đến n - 1 => không phải số nguyên tố
      if (num % i == 0) {
        isPrime = 0;
      }
    }
  }
  return isPrime;
}

const getPrimeNumber = () => {
  let getInputAmount = document.getElementById("enterAmountNumber").value;
  // Khai báo biến đếm số lượng số nguyên tố
  // nếu là số nguyên tố sẽ tăng countAmountPrimes + 1
  let countAmountPrime = 0;
  // Khai bao biến chứa chuỗi danh sách Prime Number
  let listPrimeNum = "";

  // Nếu số lượng nhập vào = 0 hoặc lớn hơn 1000 thì cảnh báo (giới hạn tài nguyên)
  if (getInputAmount > 1000 || getInputAmount == 0) {
    alert("Please Enter value between from 1 to 1000");
  } else {
    // Biến đếm nhỏ hơn số lượng nhập vào thì thoát vòng lặp
    for (let i = 0; countAmountPrime < parseInt(getInputAmount); i++) {
      // checkPrime(i) == 1 ? (countAmountPrime += 1) : countAmountPrime;
      if (checkPrime(i) == 1) {
        // Nếu là Prime Number thì tăng biến đếm lên 1 đơn vị
        countAmountPrime += 1;

        // Thêm Prime Number vào danh sách
        listPrimeNum += `<div class="col-lg-2 d-flex justify-content-center border border-secondary-subtle" >${i}</div>`;
        document.getElementById(
          "amountPrimeNum"
        ).innerHTML = `<b>${getInputAmount} First Prime Number is:</b>${listPrimeNum}`;
      }
      // Ngược lại nếu không phải Prime Number thì không tăng biến đếm
      else {
        countAmountPrime;
      }
    }
  }
};

//! Dùng preventDefault() cho input type="submit"
document.getElementById("getPrimeNum").addEventListener("click", function (e) {
  e.preventDefault();
});

/* ------------------------------------ - ----------------------------------- */

//* Bài 3.1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.

const countFromToNumber = () => {
  let fromNum = document.getElementById("enterFromNumber").value;
  let toNum = document.getElementById("enterToNumber").value;

  // Create progress bar
  let progressCount = document.getElementById("resultCountProgress");
  progressCount.style.width = 0 + "%";
  progressCount.style.height = 100 + "%";
  progressCount.style.background = "#4CAF50";

  // Khai báo i = fromNum (number)
  let i = parseInt(fromNum);

  // Khai báo biến để hiện thị số giây thời gian xử lý
  let secondCounter = "00";

  // thời gian xử lý
  let getSecond = setInterval(() => {
    secondCounter = parseInt(secondCounter);
    secondCounter++;
    if (secondCounter < 10) {
      secondCounter = "0" + secondCounter;
    }
    console.log(secondCounter);
  }, 1000);

  // dùng setInterval để tăng i theo thời gian
  let intervalMaking = setInterval(() => {
    if (i <= parseInt(toNum)) {
      // // Nếu i / toNum = 1 (đã đếm xong từ fromNum đến toNum)

      // run progress bar
      let percentCount = (progressCount.style.width =
        (i / parseInt(toNum)) * 100 + "%");

      // run i
      document.getElementById(
        "resultCountNum"
      ).innerHTML = `Counting from ${fromNum} to ${toNum} (${parseFloat(
        percentCount
      ).toFixed(2)}%) - 00:${secondCounter} seconds <br> ${i}`;

      // Nếu đã thực hiện xong thì DONE
      if (i / parseInt(toNum) == 1) {
        // DONE progress
        document.getElementById(
          "resultCountNum"
        ).innerHTML = `✅ DONE! Counted ${fromNum} → ${toNum} in 00:${secondCounter} seconds`;
        // Sau khi xử lý xong thì dừng interval & timeout
        clearInterval(intervalMaking);
        clearInterval(getSecond);
        clearTimeout(getTimeOut);
      } else {
        // Nếu chưa xong tăng i lên
        i++;
      }
    }
  }, 50); // milisecond

  // Nếu thời gian xử lý vượt quá 60000 milisecod (60s) thì ngưng xử lý
  let getTimeOut = setTimeout(() => {
    clearInterval(intervalMaking);
    clearInterval(getSecond);
    alert("Timed Out !!!");
  }, 60000);
};
//! Dùng preventDefault() cho input type="submit"
document
  .getElementById("countFromNumToNum")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });

/* ------------------------------------ - ----------------------------------- */

//* Bài 3.2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
const checkTemperature = () => {
  let getTemp = document.getElementById("enterTemperature").value;
  if (getTemp > 100) {
    document.getElementById("resultTemp").innerHTML = `It's so HOT 🔥🔥🔥`;
  } else if (getTemp < 20) {
    document.getElementById("resultTemp").innerHTML = `It's so COOL ❄❄❄`;
  } else {
    document.getElementById(
      "resultTemp"
    ).innerHTML = `Feel like so Comfortable 🎈🎈🎈`;
  }
};

//! Dùng preventDefault() cho input type="submit"
document.getElementById("checkTemp").addEventListener("click", function (e) {
  e.preventDefault();
});

/* ------------------------------------ - ----------------------------------- */

//* Bài 3.3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
const showFibNum = () => {
  let amountFibNum = document.getElementById("enterAmountFib").value;
  let divisibleByNum = document.getElementById("enterDivisible").value;
  let amountTotalFib = document.getElementById("enterTotalFib").value;

  let fib = [];
  for (let i = 0; i < amountFibNum; i++) {
    // push phần tử fib vào arr
    fib.push(fibonacci(i));
  }

  // Khai báo biến chia hết cho 5
  let divisible = 0;
  let divisiblePosition = 0;

  //* Bài 3.4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
  for (let i = 0; i < fib.length; i++) {
    if (fib[i] % divisibleByNum == 0) {
      divisible = fib[i];
      divisiblePosition = i + 1;
      // gặp trường hợp đầu tiên chia hết cho 5 thì lấy và break vòng lặp
      break;
    } else {
      divisible =
        "<span style='color:red; font-weight:700; padding:0'>Have no number divisible by " +
        divisibleByNum +
        "</span>";
      divisiblePosition = "is NULL";
    }
  }

  // Khai báo biến tỉnh tổng first Fib
  let fibSumNum = 0;

  //* Bài 3.5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
  if (amountTotalFib <= amountFibNum) {
    for (let i = 0; i < amountTotalFib; i++) {
      fibSumNum += fib[i];
    }
  } else {
    fibSumNum =
      "Amount Fibonacci just have " +
      amountFibNum +
      ". Cannot calculator " +
      amountTotalFib +
      " Fibonacci number";
  }

  // result
  document.getElementById(
    "resultFib"
  ).innerHTML = `<span class="fib fibAmount">${amountFibNum} first fibonacci number: </span>
  <span class="fib fibList">→ ${fib}</span>
  <span class="fib fibDivisibleNum">First number above divisible by ${divisibleByNum}:</span>
  <span class="fib fibDivisible">→ ${divisible} with position ${divisiblePosition}</span>
  <span class="fib fibTotalNum">Total ${amountTotalFib} first number above:</span>
  <span class="fib fibSumNum">→ ${fibSumNum}</span>
  `;
};

//! Dùng preventDefault() cho input type="submit"
document.getElementById("showFib").addEventListener("click", function (e) {
  e.preventDefault();
});

//? hàm lấy từng phần tử fibonacci
const fibonacci = (num) => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

/* ------------------------------------ - ----------------------------------- */

//* Bài 3.6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.

/* ------------------------------------ - ----------------------------------- */

//* Bài 3.7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".

/* ------------------------------------ - ----------------------------------- */

//* Bài 3.8: Game đoán số (Phiên bản nâng cấp)

const startGuess = () => {
  let startGuess = document.querySelector(".form-guess-number-hide");
  let hideBtnStart = document.getElementById("startGuess");
  startGuess.classList.remove("form-guess-number-hide");
  hideBtnStart.classList.add("form-guess-number-hide");
};

//TODO Khai báo biến chưa số cần đoán
let finalNumber = Math.floor(1 + Math.random() * 100);
console.log(finalNumber);

// Khai báo biến đếm số lần đã đoán
let guessCounter = 0;

// // Khai báo mảng chứa các số đã nhập
// let listUsedNum = [];

//! Hàm kiểm tra số đã đoán
const checkGuessNumber = () => {
  let guessNum = document.getElementById("enterGuessNum").value;

  // Nếu chưa nhập number thì cảnh báo
  if (guessNum.length == 0 || guessNum <= 0 || guessNum > 100) {
    alert("Let's enter guess number to 1 → 100");
  }
  // ngược lại tăng biến đếm và xử lý
  else {
    // tăng biến đếm
    guessCounter++;

    // gọi hàm getAttempt để đưa biến vào
    getAttempt(guessCounter);

    // Kiểm tra số nhập vào và kết quả
    // Kết quả > số nhập
    if (finalNumber > guessNum) {
      alert(
        "final Number is greater than " + guessNum + " ( X > " + guessNum + " )"
      );
    }
    // Kết quả < số nhập
    else if (finalNumber < guessNum) {
      alert(
        "final Number is less than " + guessNum + " ( X < " + guessNum + " )"
      );
    }
    // Kết quả = số nhập
    else {
      alert("Exactly! It's " + finalNumber);

      // In ra kết quả
      document.getElementById(
        "resultNumber"
      ).innerHTML = `Result: X = ${finalNumber} - You WIN! 🎉`;

      // Lấy tất cả button có class btnExecute => sẽ thành 1 array chứa các element đó
      let listBtnExe = document.querySelectorAll(".btnExecute");

      // lặp qua và gắn disabled vào từng button
      listBtnExe.forEach((item) => {
        item.disabled = true;
      });
    }
    // Lấy danh sách giá trị đã check
    let listUsed = document.getElementById("UsedNum").value;

    // Nối chuỗi các ký tự đó
    listUsed += guessNum;

    // In danh sách các số đã đoán
    document.getElementById("UsedNum").value = `${listUsed}, `;
  }
};

// gen số ngẫu nhiên từ 1 -> 5
let attempt = Math.floor(1 + Math.random() * 5);

//! Hàm random số lần đoán số
const getAttempt = (num) => {
  let guessAttempt = (document.getElementById("guessAttempt").value = attempt);

  // Khi click get attempt thì disable btn này
  document.getElementById("getGuessAttempt").disabled = true;

  // Nếu số lần đếm (lần đoán) > lần thử thì player thua
  if (num >= attempt) {
    alert("You have no attempt more!");

    // In kết quả
    document.getElementById(
      "resultNumber"
    ).innerHTML = `Result: X = ${finalNumber} - You LOST! 💀`;

    // Lấy tất cả button có class btnExecute => sẽ thành 1 array chứa các element đó
    let listBtnExe = document.querySelectorAll(".btnExecute");

    // lặp qua và gắn disabled vào từng button
    listBtnExe.forEach((item) => {
      item.disabled = true;
    });
  }
  // ngược lại lần thử sẽ giảm đi
  else {
    document.getElementById("attemptLeft").value = attempt - num;
  }
};

// Khai báo biến countHint (tối đa 30 lần hint)
let countHint = 30;

// Hàm gợi ý
//! Hàm hint
const getHint = () => {
  let guessNum = document.getElementById("enterGuessNum").value;

  // Khai báo số ngẫu nhiên so sánh với số X
  let valueHint = Math.floor(1 + Math.random() * 100);

  if (guessNum.length == 0 || guessNum <= 0 || guessNum > 100) {
    alert("Let's enter guess number to 1 → 100");
  } else {
    if (countHint > 0) {
      // giảm đếm số lần hint
      countHint--;

      // Trừ hint
      document.getElementById("badge-hint").innerHTML = countHint;

      // Show hint
      if (finalNumber < valueHint) {
        document.getElementById("guessHint").value = `X < ${valueHint}`;
      } else if (finalNumber == valueHint) {
        document.getElementById("guessHint").value = `X < ${valueHint + 1}`;
      } else {
        document.getElementById("guessHint").value = `X > ${valueHint}`;
      }
    } else {
      alert("You have no hint more");
      document.getElementById("getGuessHint").disabled = true;
    }
  }
};

// Hàm refresh game
const refreshGame = () => {
  location.reload();
};

/* ------------------------------------ - ----------------------------------- */
