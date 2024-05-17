// code here
// variable

// let => khai báo 1 biến thông thường và có thể OVERWRITE
// const => khai báo hăng số và không thể overwrite
// var = dùng rồi mới khai báo

//* Toán tử + - * / & ++ ** --
let num1 = 10;
console.log(num1++); // log num1 sau đó mới ++ => log ra num1 = 10, sau đó num1++ = 11 nhưng đã log ra 10 rồi
console.log(++num1); // num1 trước đó đã là 11, sau đó ++ là 12 sau đó log ra num1 = 12

//! ==  : kiểm tra giá trị
//! === : kiểm tra giá trị và kiểm tra kiểu dữ liệu

//* BT2 - Biến - kiểu dự liệu - toán tử

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
const temperature = () => {
  let doC = document.getElementById("do-c").value;
  let doF = (doC / 5) * 9 + 32;
  document.getElementById("doF").innerHTML = doF.toFixed(2);
};

// Bài 3: Viết chương trình tính diện tích hình tròn
// Bài 4: Viết chương trình chu vi hình tròn

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
