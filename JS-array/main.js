//* ---------------------------------- ARRAY --------------------------------- */

// Nối các phần tử của mảng thành chuỗi
// let arr = ["Red", "Green", "White", "Black"];

// console.log(arr.toString());         => Red,Green,White,Black
// console.log(arr.join());             => Red,Green,White,Black
// console.log(arr.join("-"));          => Red-Green-White-Black
// =>

//* -------------------------------------------------------------------------- */
//*                                   ARRAY 2                                  */
//* -------------------------------------------------------------------------- */

/* ------------------------------------ - ----------------------------------- */

//* 2.2. nhận một số nhập vào và chèn dấu (-) giữa 2  số chẵn.
// Ví dụ nếu bạn nhập vào 025468 thì kết quả của chương trình sẽ là 0-254-6-8.

// Hàm chuyển
const convertListNumber = () => {
  let getListNum = document.getElementById("enterNumberList").value;

  // split(): chuyển dãy số thành string
  // let listNumArr = getListNum.split("");

  // Chuyển dãy số thành string
  let listNumArr = getListNum.toString();

  // Khai báo mảng mới chứa ký tự đầu tiên
  let listResultNum = [listNumArr[0]];

  for (let i = 1; i < getListNum.length; i++) {
    // Quét đến phần từ i, nếu giá trị phần tử i và i-1 chẵn thì add "-"
    if (listNumArr[i - 1] % 2 === 0 && listNumArr[i] % 2 === 0) {
      // push vào mảng kèm theo "-"
      listResultNum.push("-", listNumArr[i]);
    } else {
      // push thẳng vào mảng
      listResultNum.push(listNumArr[i]);
    }
  }

  document.getElementById("resultArrayConverted").value =
    listResultNum.join("");
};

/* ------------------------------------ - ----------------------------------- */

//* 2.3. Chuyển các ký tự chữ thường sang thành chữ hoa. -->
// VD: Nếu nhập vào chuỗi 'The Quick Brown Fox' kết quả của chương trình là 'tHE qUICK bROWN fOX'. -->

const convertListText = () => {
  let getListText = document.getElementById("enterTextList").value;

  // Khai báo chữ thường, chữ hoa
  let UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let LOWER = "abcdefghijklmnopqrstuvwxyz";

  // Khai báo mảng rổng
  let listResultText = [];

  for (let i = 0; i < getListText.length; i++) {
    // Vị trí của ký tự trong arr chữ hoa
    let positionUPPER = UPPER.indexOf(getListText[i]);

    // Vị trí của ký tự trong arr chữ thường
    let positionLOWER = LOWER.indexOf(getListText[i]);

    // Nếu vị trí của ký tự UPPER khác -1 => có tồn tại trong dãy đã nhập
    if (positionUPPER !== -1) {
      // LOWER[positionUPPER] => lấy vị trí chữ hoa và tham chiếu xuống chữ thường
      // sau đó push chữ thường vào mảng
      listResultText.push(LOWER[positionUPPER]);
    }
    // Ngược lại, nếu là chữ thường => chuyển sang chữ hoa
    else if (positionLOWER !== -1) {
      listResultText.push(UPPER[positionLOWER]);
    }
    // Nếu không thuộc 2 trường hợp trên => push thẳng
    else {
      listResultText.push(getListText[i]);
    }
  }
  console.log(listResultText);
  document.getElementById("resultTextConverted").value =
    listResultText.join("");
};

/* ------------------------------------ - ----------------------------------- */

//* 3.3. Ứng dụng cho phép tra cứu các từ tiếng Anh sang tiếng Việt.
// Danh sách các từ được lưu trữ trong các mảng.

// hàm load danh sách list Eng - Vie
const loadListWord = () => {
  let listWordEng = [
    "Happy",
    "Mature",
    "Money",
    "Life",
    "Think",
    "Active",
    "Passion",
    "Attitude",
    "Married",
    "Freedom",
  ];

  let listWordVie = [
    "Vui vẻ",
    "Trưởng thành",
    "Tiền bạc",
    "Cuộc sống",
    "Suy nghĩ",
    "Hành động",
    "Niềm đam mê",
    "Thái độ",
    "Kết hôn",
    "Tự do",
  ];

  document.getElementById("list-word").innerHTML = listWordEng.join(", ");

  // Return về Object chứa 2 giá trị là 2 array trên
  return {
    engList: listWordEng,
    vieList: listWordVie,
  };
};
// Hàm translate
const translateText = () => {
  let getText = document.getElementById("enterEnglish").value;

  //? Object.values(getListText): Lấy giá trị của Object => lấy được 2 mảng
  if (getText.length == 0) {
    alert("Enter text to translate");
  } else {
    let getListText = loadListWord();
    let arrListText = Object.values(getListText);

    // arrListText[0]: là listEng
    // arrListText[1]: là listVie
    for (let i = 0; i < arrListText[0].length; i++) {
      // Nếu từ nhập vào === 1 trong các từ trong mảng Eng
      // Thì in ra từ trong mảng Vie tại vị trí của Eng
      if (arrListText[0][i] === getText) {
        document.getElementById("translateText").value = `${arrListText[1][i]}`;
        // Sau khi tìm chính xác break vòng lặp
        break;
      } else {
        document.getElementById(
          "translateText"
        ).value = `Can not read this word, Try again !!!`;
      }
    }
  }
};

// hàm đảo vị trí ngôn ngữ
const swapTranslate = () => {
  alert("This function is building, wait for the next upgrade");
};

/* ------------------------------------ - ----------------------------------- */

//* 3.5. Ứng dụng vui.
// Khi người dùng gõ bàn phím thì một dòng chữ cố định sẽ lần lượt hiện ra.
// Cho dù người dùng gõ chữ nào thì cũng lần lượt hiện ra dòng chữ cố định đó.

// Khai báo biến đếm số lần nhấn phím
let countPressKey = 0;

// Khai báo biến hiển thị kết quả Type Me
let resultTypeMe = "";

let randNumTypeMe = Math.floor(Math.random() * 4);
console.log(randNumTypeMe);

//* Hàm type me
const typeMe = () => {
  // Tăng biến count khi nhấn phím
  countPressKey++;

  // create object to random content
  let showText = {
    txt1: "You are very handsome!!!",
    txt2: "I LOVE YOU <3",
    txt3: "Will you marry me?",
    txt4: "You are so cool",
  };

  // Khai báo biến lấy giá trị object
  let arrListText = Object.values(showText);

  //? arrListText[randNumTypeMe]
  //! randNumTypeMe: giá trị ngẫu nhiên
  //! arrListText[randNumTypeMe]: lấy phần tử ngẫu nhiên trong mảng arrListText
  //! arrListText: mảng chứa value của các phần tử trong object
  //TODO ==> Lấy value ngẫu nhiên trong Object
  for (let i = 1; i <= arrListText[randNumTypeMe].length; i++) {
    // Nếu số lần nhấn phím = với i chạy thì in ra ký tự vị trí i-1
    if (countPressKey == i) {
      resultTypeMe += arrListText[randNumTypeMe][i - 1];
      document.getElementById("enterAnything").value = resultTypeMe;
    }
    // Nếu số lần nhấn phím = với chiều dài arr ký tự thì disabled
    else if (countPressKey == arrListText[randNumTypeMe].length) {
      document.getElementById("enterAnything").disabled = true;
      document.getElementById(
        "refreshTypeMe"
      ).innerHTML = `<input onclick="refreshTypeMe()" class="btn btn-primary mt-3" type="reset" value="OK"></input>`;
    }
  }
};

// Hàm refresh Type me
const refreshTypeMe = () => {
  alert("Your messenger was sent ✅");
  location.reload();
};
