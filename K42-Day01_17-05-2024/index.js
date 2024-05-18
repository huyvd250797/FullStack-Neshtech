// code here
// variable

// let => khai báo 1 biến thông thường và có thể OVERWRITE
// const => khai báo hăng số và không thể overwrite
// var = dùng rồi mới khai báo

//* Toán tử + - * / & ++ ** --
let num1 = 10;
// console.log(num1++); // log num1 sau đó mới ++ => log ra num1 = 10, sau đó num1++ = 11 nhưng đã log ra 10 rồi
// console.log(++num1); // num1 trước đó đã là 11, sau đó ++ là 12 sau đó log ra num1 = 12

//! ==  : kiểm tra giá trị
//! === : kiểm tra giá trị và kiểm tra kiểu dữ liệu

//* 4.[Bài tập] Biến, kiểu dữ liệu và toán tử

// Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình và tổng của những điểm này.

const sum = () => {
  //? parseInt: ép kiểu về Number
  let ly = parseInt(document.getElementById("ly").value);
  let hoa = parseInt(document.getElementById("hoa").value);
  let sinh = parseInt(document.getElementById("sinh").value);
  console.log("Điểm trung binh 3 môn:", ly, hoa, sinh);
  let tbmon = (ly + hoa + sinh) / 3;
  document.getElementById("tbmon").innerHTML = tbmon.toFixed(2);
};

// Bài 2:  Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit). [Hướng dẫn: C/5 = (F-32)/9]
// hàm đổi nhiệt độ
const temperature = () => {
  let doC = document.getElementById("do-c").value;
  let doF = (doC / 5) * 9 + 32;
  document.getElementById("doF").innerHTML = doF.toFixed(2);
};

// Bài 3: Viết chương trình tính diện tích hình tròn
// Bài 4: Viết chương trình chu vi hình tròn

// Hàm tính chu vi & diện tích hình tròn
const calCircle = () => {
  let radius = document.getElementById("radius").value;
  let areaCircle = (radius * radius * Math.PI).toFixed(2);
  let perimeterCircle = (radius * 2 * Math.PI).toFixed(2);
  document.getElementById(
    "areaCircle"
  ).innerHTML = `Diện tích hình tròn với bán kính ${radius} cm là: <b>${areaCircle}</b> cm²`;
  document.getElementById(
    "perimeterCircle"
  ).innerHTML = `Chu vi hình tròn với bán kính ${radius} cm là: <b>${perimeterCircle}</b> cm`;
};

//TODO ------------------- 5. Ứng dụng chuyển đổi tiền tệ ------------------
// convert currency
const convertCurrency = () => {
  let amountCurr = document.getElementById("amountCurr").value;
  let selectedFrom = document.getElementById("fromCurr").value;
  let selectedTo = document.getElementById("toCurr").value;
  let currency = 0;
  let typeCurr;

  if (selectedFrom == selectedTo) {
    // Nếu 2 loại tiền tệ giống nhau thì set currency = amounCurr
    currency = amountCurr;
    alert("Tiền tệ chuyển đổi giống nhau !");
  }
  // VND
  else if (selectedFrom == "VND") {
    if (selectedTo == "USD") {
      currency = amountCurr / 25500;
    } else if (selectedTo == "EUR") {
      currency = amountCurr / 27665;
    } else if (selectedTo == "JPY") {
      currency = amountCurr / 164;
    }
  }

  // USD
  else if (selectedFrom == "USD") {
    if (selectedTo == "VND") {
      currency = amountCurr * 25500;
    } else if (selectedTo == "EUR") {
      currency = amountCurr * 0.92;
    } else if (selectedTo == "JPY") {
      currency = amountCurr * 156;
    }
  }

  // EUR
  else if (selectedFrom == "EUR") {
    if (selectedTo == "VND") {
      currency = amountCurr * 27660;
    } else if (selectedTo == "USD") {
      currency = amountCurr * 1.09;
    } else if (selectedTo == "JPY") {
      currency = amountCurr * 169;
    }
  }

  // JPY
  else if (selectedFrom == "JPY") {
    if (selectedTo == "VND") {
      currency = amountCurr * 27660;
    } else if (selectedTo == "USD") {
      currency = amountCurr * 0.006428;
    } else if (selectedTo == "EUR") {
      currency = amountCurr * 0.005914;
    }
  }
  let toFixCurr = currency.toFixed(4);
  document.getElementById(
    "resultCurr"
  ).innerHTML = `${amountCurr} ${selectedFrom} = ${toFixCurr} ${selectedTo}`;
};

//TODO ------------------- 6. Tạo một ứng dụng máy tính bỏ túi ------------------

const keyboardArea = () => {
  // Khai báo biến chứa vùng click
  let btnSelected = document.querySelector(".cal__keyboard");

  let btnPress;
  // Click trong vùng cal__keyboard
  btnSelected.onclick = function (e) {
    // bắt chính xác element được click và gán vào btnPress
    btnPress = e.target;

    // Đưa các keyboard vào mảng xử lý
    let listBtnCal = document.querySelectorAll(".btn__cal");
    // console.log(listBtnCal);

    for (let i = 0; i < listBtnCal.length; i++) {
      // Nếu click vào element có class btn__input
      if (btnPress.closest(".btn__input")) {
        // console.log(btnPress);
        //  Thì mới hiển thị input vào monitor
        document.getElementById("resultCal").innerText = btnPress.textContent;
        // Chuyển text AC thành C
        listBtnCal[0].innerText = "C";
        // Chuyển text keyboard AC thành C
        document.getElementsByClassName("btn__cal").innerText =
          listBtnCal[0].innerText;
      }
      // nếu btnPress == listBtnCal[0] (nút AC)
      else if (btnPress == listBtnCal[0]) {
        // Nếu như click vào key có text là AC
        if (btnPress.innerText == "AC") {
          // Hiển thị 0 vào Monitor
          document.getElementById("resultCal").innerText = `0`;
        }
        // Nếu như click vào key có text là C
        else if (btnPress.innerText == "C") {
          // Chuyển text C thành AC
          btnPress.innerText = "AC";
          // Chuyển text keyboard C thành AC
          document.getElementsByClassName("btn__cal").innerText =
            btnPress.innerText;
          // Đồng thời Hiển thị 0 vào Monitor
          document.getElementById("resultCal").innerText = `0`;
        }
      }
    }
  };
};
