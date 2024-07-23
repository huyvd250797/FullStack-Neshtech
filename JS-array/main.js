//* ---------------------------------- START DARK MODE --------------------------------- */
const darkMode = () => {
  document.body.classList.toggle("dark-mode-body");
  document
    .querySelector(".toggle-dark-mode")
    .classList.toggle("bg-btn-light-mode");
};
//* ---------------------------------- END DARK MODE --------------------------------- */

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

/* ------------------------------------ - ----------------------------------- */

//TODO ------------------------------------ 6. Luyện tập mảng ----------------------------------- */

const changeStyleFuncContainer = () => {
  let getFuncContainer = document.getElementById("selectFnContainer");
  //? offsetTop: khoảng cách tính từ element đến top = 0 (kèm thêm khoảng margin)
  // Ví dụ: element A có Top = 100px có margin-top 10px
  // (element này có khoảng cách 110px (tính cả margin-top) tính từ top = 0)
  //!!! ==> offsetTop = 110
  let changeStyle = getFuncContainer.offsetTop;

  // Nếu như pageYOffset == getFuncContainer.offsetTop
  // ==> getFuncContainer.offsetTop đã được scroll lên trên cùng
  if (window.pageYOffset >= changeStyle) {
    getFuncContainer.classList.add("make-sticky", "bg-selectFn-container");
  } else {
    getFuncContainer.classList.remove("make-sticky", "bg-selectFn-container");
  }
};

//* --------------------------- Hàm get Arr length --------------------------- */

const getArrayLength = () => {
  let getArrLength = document.getElementById("enterArrLength").value;

  // show btn Create Array
  let getBtnCreateArr = document.querySelector(".create-array");

  // Nếu dữ liệu nhập từ 4 - 12 thì xử lý
  if (getArrLength >= 4 && getArrLength <= 12) {
    //? gán getArrLength vào hàm createIndexArr() và run
    createIndexArr(getArrLength);

    // remove class hide-form
    getBtnCreateArr.classList.remove("hide-form");
    //! Clear data input
    clearAllArr();
  } else {
    alert("Enter array length between 4 - 12");

    // clear data input enterArrLength
    document.getElementById("enterArrLength").value = "";
  }
};

// Hàm random Array Length
const randArrLength = () => {
  // randbetween from 4 -> 12
  let randNum = Math.floor(Math.random() * 9 + 4);
  document.getElementById("enterArrLength").value = randNum;
};

//* --------------------- Hàm create các phần tử của mảng -------------------- */
const createIndexArr = (index) => {
  let createInputArr = "";
  // index sẽ là giá trị nhập vào khi tạo array length
  for (let i = 0; i < index; i++) {
    createInputArr += `
    <div class="col-lg-3 col-sm-12">
      <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">${i + 1}</span>
      <input type="number" class="form-control item-array item-array-${
        i + 1
      }" aria-label="" aria-describedby="inputGroup-sizing-sm">
      </div>
    </div>
    `;
  }
  document.getElementById(
    "resultCreateArrLength"
  ).innerHTML = `Array length is ${index}
  <span 
        onclick="fillAllArrElement()"
        id="fillAllArrElement"
        class="ms-1" 
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Fill all element">
  <i class="fa-solid fa-turn-down get-list-word"></i>
  </span>`;
  document.getElementById("indexOfArr").innerHTML = createInputArr;
};

// Hàm fill all element
const fillAllArrElement = () => {
  let itemArr = document.querySelectorAll(".item-array");
  for (let i = 1; i <= itemArr.length; i++) {
    // rand from -300 --> 300
    let randNum = Math.floor(Math.random() * 301 - Math.random() * 301);

    // gán rand value vào value vị trí class tương ứng
    document.querySelector(`.item-array-${i}`).value = randNum;
  }
};

// Khai báo mảng rỗng
let getListArr = [];

// Khai báo mảng gốc
let originalArr = [];

//* --------------------------- * START: Hàm create array * --------------------------- */
const createArray = () => {
  // Lấy tất cả element có class item-array thành nodelist
  let listItemArr = document.querySelectorAll(".item-array");

  for (let i = 0; i < listItemArr.length; i++) {
    //? listItemArr[i].value
    //! listItemArr[i]: lấy dc input tag
    //! .value: value của input tag
    getListArr.push(listItemArr[i].value);
    document.getElementById(
      "reviewArr"
    ).innerHTML = `Your Array is: <span class="your-arr">[${getListArr.join(
      ", "
    )}]</span>`;
    document.getElementById(
      "reviewArrModal"
    ).innerHTML = `<span class="your-arr">[${getListArr.join(", ")}]</span>`;
    // Nếu giá trị của input NULL thì hiện cảnh báo
    if (listItemArr[i].value.length == 0) {
      document.querySelector("#arr-null").classList.remove("hide-form");
    }
  }

  originalArr = getListArr;

  document.getElementById("create-arr").disabled = true;
};

//* --------------------------- * END:  Hàm create array * --------------------------- */

//? Hàm Btn Yes
const btnYesArr = () => {
  document.querySelector(".reviewArray").classList.remove("hide-form");

  // remove hide-form to form select
  document.getElementById("selectFnContainer").classList.remove("hide-form");
};

//? Hàm Btn NO & X
const btnNoArr = () => {
  // Chuyển thành mảng rỗng
  getListArr = [];

  // Gỡ btn create arr = false
  document.getElementById("create-arr").disabled = false;

  // add hide-form to form select
  document.getElementById("selectFnContainer").classList.add("hide-form");

  // Nếu trường hợp NULL value -> click No thì add hide-form
  document.querySelector("#arr-null").classList.add("hide-form");
};

//! ------------------------- * START: hàm clear all data Arr * ------------------------- */
const clearAllArr = () => {
  // Chuyển thành mảng rỗng
  getListArr = [];

  // Gỡ btn create arr = false
  document.getElementById("create-arr").disabled = false;

  // add class hide-form
  document.querySelector(".reviewArray").classList.add("hide-form");

  // add class hide-form khi null value element arr
  document.querySelector("#arr-null").classList.add("hide-form");

  // add hide-form to form select
  document.getElementById("selectFnContainer").classList.add("hide-form");
};

//! ------------------------- * END: hàm clear all data Arr * ------------------------- */

//TODO ------------------------------------ Bài 1: Compare Value ----------------------------------- */
//* Bài 1- Viết chương trình khởi tạo mảng số nguyên gồm N phần tử.
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng N.

// Hàm get valueCompare
const getCompareValue = () => {
  let getcompareval = document.getElementById("inputGroup-compare").value;
  return getcompareval;
};

// Hàm compare X ≤ N
const compareLessThan = () => {
  // khai báo mảng rỗng chứa kết quả
  let arrReult = [];
  for (let i = 0; i < getListArr.length; i++) {
    // Nếu phần tử trong mảng <= số cần kiểm tra
    if (parseInt(getListArr[i]) <= parseInt(getCompareValue())) {
      arrReult.push(getListArr[i]);
    }
    document.getElementById(
      "resultCompare"
    ).innerHTML = `List numbers <span class="hightlight-red">≤ ${getCompareValue()}</span> is: <b>[${arrReult.join(
      ", "
    )}]</b>`;
  }
};
// Hàm compare X ≥ N
const compareGreaterThan = () => {
  // khai báo mảng rỗng chứa kết quả
  let arrReult = [];
  for (let i = 0; i < getListArr.length; i++) {
    // Nếu phần tử trong mảng >= số cần kiểm tra
    if (parseInt(getListArr[i]) >= parseInt(getCompareValue())) {
      arrReult.push(getListArr[i]);
    }
    document.getElementById(
      "resultCompare"
    ).innerHTML = `List numbers <span class="hightlight-red">≥ ${getCompareValue()}</span> is: <b>[${arrReult.join(
      ", "
    )}]</b>`;
  }
};

//! Hàm show func01: Bài 1 _ Compare Value
const showFunc01 = () => {
  document.getElementById("func01").innerHTML = `
  <p class="title-func">1. Functional: Compare</p>
  <p class="sub-title-func">Enter number N to compare</p>
  <p>Review your Array: <span id="reviewArrFunc01"></span></p>

  <div
    id="compare-value"
    class="input-group mb-3 w-25 inputGroup-compare"
  >
    <!-- X ≤ N -->
    <button
      onclick="compareLessThan()"
      class="btn btn-outline-secondary less-btn"
      type="button"
      id="button-addon1"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Find numbers ≤ N"
    >
      X ≤
    </button>
    <input
      id="inputGroup-compare"
      type="number"
      class="form-control input-compare"
      placeholder="N"
      aria-label="Example text with button addon"
      aria-describedby="button-addon1 & button-addon2"
    />
    <!-- X ≥ N -->
    <button
      onclick="compareGreaterThan()"
      class="btn btn-outline-secondary greater-btn"
      type="button"
      id="button-addon2"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Find numbers ≥ N"
    >
      ≤ X
    </button>
  </div>

  <!-- Show result compared -->
  <div id="resultCompare"></div>
  `;

  // Show preview your array
  document.getElementById(
    "reviewArrFunc01"
  ).innerHTML = `<span class="your-arr">[${originalArr.join(", ")}]</span>`;
};

//TODO ------------------------------------ Bài 2: Find Min/Max value ----------------------------------- */
//* Bài 2- Viết chương trình khởi tạo mảng số nguyên gồm N phần tử khác nhau.
// Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.

// hàm find min
const findMin = () => {
  // khai báo min = phần tử đầu tiên trong mảng
  let min = getListArr[0];
  for (let i = 1; i < getListArr.length; i++) {
    // Nếu phần tử đang xét < min => min là phần tử đó
    if (parseInt(getListArr[i]) < parseInt(min)) {
      min = getListArr[i];
    }
    // ngược lại min vẫn là min
    else {
      min;
    }
  }
  // document.getElementById("inputMaxVal").value = "";
  document.getElementById("inputMinVal").value = min;
};

// hàm find max
const findMax = () => {
  // khai báo max = phần tử đầu tiên trong mảng
  let max = getListArr[0];
  for (let i = 1; i < getListArr.length; i++) {
    // Nếu phần tử đang xét < max => max là phần tử đó
    if (parseInt(getListArr[i]) > parseInt(max)) {
      max = getListArr[i];
    }
    // ngược lại max vẫn là max
    else {
      max;
    }
  }
  // document.getElementById("inputMinVal").value = "";
  document.getElementById("inputMaxVal").value = max;
};

// hàm find both
const findBoth = () => {
  findMin();
  findMax();
};

//! Hàm show func02: Bài 2 _ Find Min/Max value
const showFunc02 = () => {
  document.getElementById("func02").innerHTML = `
  <p class="title-func">2. Functional: Find Min/Max value</p>

  <!-- preview arr -->
  <p>Review your Array: <span id="reviewArrFunc02"></span></p>

  <!-- form show min max -->
  <div
    class="inputGroup-minmax-func d-flex justify-content-between w-50 mt-2"
  >
    <!-- result Min -->
    <div class="input-group mb-3 input-min w-25">
      <span class="input-group-text" id="basic-addon1">Min</span>
      <input
        id="inputMinVal"
        type="text"
        class="form-control"
        placeholder="Min value"
        aria-label="Min value"
        aria-describedby="basic-addon1"
        disabled
      />
    </div>

    <!-- result Max -->
    <div class="input-group mb-3 input-max w-25">
      <span class="input-group-text" id="basic-addon1">Max</span>
      <input
        id="inputMaxVal"
        type="text"
        class="form-control"
        placeholder="Max value"
        aria-label="Max value"
        aria-describedby="basic-addon1"
        disabled
      />
    </div>

    <!-- btn get value min/max or both -->
    <div
      class="btn-group btnGroup-minmax"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <!-- min -->
      <input
        onclick="findMin()"
        type="radio"
        class="btn-check btn-min"
        name="btnradio"
        id="btnMin"
        autocomplete="off"
        checked
      />
      <label class="btn btn-outline-primary" for="btnMin">Min</label>

      <!-- both -->
      <input
        onclick="findBoth()"
        type="radio"
        class="btn-check btn-both"
        name="btnradio"
        id="btnBoth"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnBoth">Both</label>

      <!-- max -->
      <input
        onclick="findMax()"
        type="radio"
        class="btn-check btn-max"
        name="btnradio"
        id="btnMax"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnMax">Max</label>
    </div>
  </div>
  `;

  // Show preview your array
  document.getElementById(
    "reviewArrFunc02"
  ).innerHTML = `<span class="your-arr">[${originalArr.join(", ")}]</span>`;
};

//TODO ------------------------------------ Bài 3: Calculator average ----------------------------------- */
//* Bài 3- Viết chương trình khởi tạo mảng số nguyên.
// Hiển hiện giá trị lớn nhất trong mảng đó. In ra giá trị trung bình của các phần tử trong mảng.

// hàm tính trung bình
const calAvgValue = () => {
  // Khai báo biến sum all
  let sumAll = 0;

  // Khai báo biến tính TB
  let averageValue = 0;

  // Khai báo mảng rỗng chưa danh sách
  let listElement = [];

  for (let i = 0; i < getListArr.length; i++) {
    listElement.push(getListArr[i]);
    // cộng dồn
    sumAll += parseInt(getListArr[i]);
  }

  // Tính trung bình cộng
  averageValue = sumAll / getListArr.length;
  console.log((averageValue = sumAll / getListArr.length));
  document.getElementById("avgDetail").innerHTML = `(${listElement.join(
    "+"
  )}) / ${getListArr.length} = ${averageValue.toFixed(2)}`;
  document.getElementById("resultAVGvalue").value = averageValue.toFixed(2);
};
//! Hàm show func03: Bài 3 _ Calculator average all element
const showFunc03 = () => {
  document.getElementById("func03").innerHTML = `
  <p class="title-func">3. Functional: Calculator average all value</p>

  <!-- preview arr -->
  <p>Review your Array: <span id="reviewArrFunc03"></span></p>
  <div class="row content-avg-cal g-3 w-50">
    <div class="col-lg-auto col-sm-12">
      <input
        type="text"
        readonly
        class="form-control-plaintext label-cal-avg"
        value="Average value all element"
      />
    </div>
    <div class="col-lg-auto col-sm-12">
      <label for="resultAVGvalue" class="visually-hidden"
        >AVG value</label
      >
      <input
        type="number"
        class="form-control"
        id="resultAVGvalue"
        placeholder="AVG value"
        disabled
      />
      <p id="avgDetail"></p>
    </div>
    <div class="col-lg-auto col-sm-12">
      <button onclick="calAvgValue()" class="btn btn-danger mb-3">
        Calculator Avegare
      </button>
    </div>
  </div>
  `;
  // Show preview your array
  document.getElementById(
    "reviewArrFunc03"
  ).innerHTML = `<span class="your-arr">[${originalArr.join(", ")}]</span>`;
};

//TODO ------------------------------------ Bài 4: Reverse Array ----------------------------------- */
//* Bài 4- Viết chương trình khởi tạo/nhập vào một mảng số nguyên
// và đảo ngược các phần tử trong mảng đó.

// Hàm đảo ngược mảng
const reverseArray = () => {
  // Khai báo mảng mới là mảng đảo ngược với mảng ban đầu
  let reversedArr = [];

  // Chạy i bắt đầu từ length -1 của mảng gốc
  // Chạy đến khi nào i = 0
  for (let i = getListArr.length - 1; i >= 0; i--) {
    // push các phần tử vào mảng đảo ngược
    reversedArr.push(getListArr[i]);
  }
  document.getElementById("reverseArrFunc04").value = reversedArr.join(", ");

  // add class
  document
    .getElementById("reverseArrFunc04")
    .classList.add("reverse-arr-func04");
};

//! Hàm show func04: Bài 4 _ CReverse Array
const showFunc04 = () => {
  document.getElementById("func04").innerHTML = `
  <p class="title-func">4. Functional: Reverse Array</p>

  <div class="inputReverseArr w-75">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Original</span>
      <input
        id="reviewArrFunc04"
        type="text"
        class="form-control"
        placeholder="Original array"
        aria-label="Original array"
        aria-describedby="basic-addon1"
        disabled
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Reverse</span>
      <input
        id="reverseArrFunc04"
        type="text"
        class="form-control"
        placeholder="Reverse array"
        aria-label="Reverse array"
        aria-describedby="basic-addon1"
        disabled
      />
    </div>
  </div>
  <button onclick="reverseArray()" type="button" class="btn btn-dark">
    Reverse
  </button>
  `;
  // Show preview your array
  // khác với các bài trên, preview thẳng vào input
  document.getElementById("reviewArrFunc04").value = originalArr.join(", ");

  // add class
  document.getElementById("reviewArrFunc04").classList.add("review-arr-func04");
};

//TODO ------------------------------------ Bài 5: Count Positive/Negative Number ----------------------------------- */
//* Bài 5- Viết chương trình đếm số nguyên dương/âm trong một chuỗi
// Khai báo mảng chứa giá trị dương
let positiveArrVal = [];

// Khai báo mảng chứa giá trị âm
let negativeArrVal = [];

// Hàm đếm số nguyên dương / âm
const processPosNevNumber = () => {
  // Khai báo mảng chứa vị trí giá trị dương
  let positiveArrPos = [];
  // Khai báo total giá trị dương
  let sumPositive = 0;

  // Khai báo mảng chứa vị trí giá trị âm
  let negativeArrPos = [];
  // Khai báo total giá trị âm
  let sumNegative = 0;

  // Khai báo mảng chứa vị trí giá trị zero
  let zeroArrPos = [];

  for (let i = 0; i < getListArr.length; i++) {
    // POSITIVE
    if (getListArr[i] > 0) {
      // push mảng dương
      positiveArrVal.push(getListArr[i]);

      // push mảng vị trí dương
      positiveArrPos.push(i + 1);

      // Tổng giá trị dương
      sumPositive += parseInt(getListArr[i]);

      // Gọi hàm check chẵn,lẻ dương
      checkEvenOddPositive();
    }
    // NEGATIVE
    else if (getListArr[i] < 0) {
      // push mảng âm
      negativeArrVal.push(getListArr[i]);

      // push mảng vị trí âm
      negativeArrPos.push(i + 1);

      // Tổng giá trị âm
      sumNegative += parseInt(getListArr[i]);

      // Gọi hàm check chẵn,lẻ âm
      checkEvenOddNegative();
    } else {
      // push mảng vị trí zero
      zeroArrPos.push(i + 1);
    }
  }

  //? hiển thị arr giá trị dương
  document.getElementById("listPositiveNum").value = `[${positiveArrVal.join(
    ", "
  )}]`;

  //? hiển thị arr vị trí giá trị dương
  document.getElementById("positiveNumPos").value = `[${positiveArrPos.join(
    ", "
  )}]`;

  //? hiển thị tổng giá trị dương
  document.getElementById("totalPositive").value = `${sumPositive}`;

  /* ------------------------------------ - ----------------------------------- */

  //? hiển thị arr giá trị âm
  document.getElementById("listNegativeNum").value = `[${negativeArrVal.join(
    ", "
  )}]`;

  //? hiển thị arr vị trí giá trị âm
  document.getElementById("negativeNumPos").value = `[${negativeArrPos.join(
    ", "
  )}]`;

  //? hiển thị tổng giá trị âm
  document.getElementById("totalNegative").value = `${sumNegative}`;

  /* ------------------------------------ - ----------------------------------- */

  //? hiển thị arr vị trí giá trị zero
  document.getElementById("zeroPos").value = `[${zeroArrPos.join(", ")}]`;
};

//* hàm kiểm tra chẵn,lẻ number dương
const checkEvenOddPositive = () => {
  // Khai báo biến tổng chẵn
  let sumEven = 0;

  // Khai báo biến tổng lẻ
  let sumOdd = 0;

  for (let i = 0; i < positiveArrVal.length; i++) {
    // chẵn
    if (positiveArrVal[i] % 2 == 0) {
      sumEven += parseInt(positiveArrVal[i]);
    }
    // lẻ
    else {
      sumOdd += parseInt(positiveArrVal[i]);
    }
  }
  document.getElementById("evenPositiveNum").value = sumEven;
  document.getElementById("oddPositiveNum").value = sumOdd;
};

//* hàm kiểm tra chẵn,lẻ number âm
const checkEvenOddNegative = () => {
  // Khai báo biến tổng chẵn
  let sumEven = 0;

  // Khai báo biến tổng lẻ
  let sumOdd = 0;

  for (let i = 0; i < negativeArrVal.length; i++) {
    // chẵn
    if (negativeArrVal[i] % 2 == 0) {
      sumEven += parseInt(negativeArrVal[i]);
    }
    // lẻ
    else {
      sumOdd += parseInt(negativeArrVal[i]);
    }
  }
  document.getElementById("evenNegativeNum").value = sumEven;
  document.getElementById("oddNegativeNum").value = sumOdd;
};

//! Hàm show func05: Bài 5 _ Count Positive/Negative Number
const showFunc05 = () => {
  document.getElementById("func05").innerHTML = `
  <p class="title-func">
  5. Functional: Count Positive/Negative Number
</p>

<!-- preview arr -->
<p>Review your Array: <span id="reviewArrFunc05"></span></p>
<div class="PosNev-container">
  <button
    onclick="processPosNevNumber()"
    type="button"
    class="btn btn-dark"
  >
    Get value
  </button>
  <!--? Positive -->
  <div
    class="row g-3 group-positive d-flex justify-content-center align-items-center"
  >
    <div
      class="col-12 item-func05 d-flex justify-content-center align-items-center"
    >
      <div class="item-func05-text">POSITIVE</div>
    </div>

    <!-- Positive Number -->
    <div class="col-6 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          >Positive</span
        >
        <input
          id="listPositiveNum"
          type="text"
          class="form-control"
          placeholder="List positive number"
          aria-label="List positive number"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>

    <!-- Positive Position -->
    <div class="col-6 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          >Position</span
        >
        <input
          id="positiveNumPos"
          type="text"
          class="form-control"
          placeholder="List position number"
          aria-label="List position number"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>
    <!-- Total Positive number -->
    <div class="col-4 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">Total</span>
        <input
          id="totalPositive"
          type="text"
          class="form-control"
          placeholder="Total value"
          aria-label="Total"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>

    <!-- Even Positive number -->
    <div class="col-4 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">Even</span>
        <input
          id="evenPositiveNum"
          type="text"
          class="form-control"
          placeholder="Total value"
          aria-label="Even number"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>
    <!-- Odd Positive number -->
    <div class="col-4 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">Odd</span>
        <input
          id="oddPositiveNum"
          type="text"
          class="form-control"
          placeholder="Total value"
          aria-label="Odd number"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>
  </div>

  <!--? Negative -->
  <div
    class="row g-3 group-negative d-flex justify-content-center align-items-center"
  >
    <div
      class="col-12 item-func05 d-flex justify-content-center align-items-center"
    >
      <div class="item-func05-text">NEGATIVE</div>
    </div>
    <!-- Negative Number -->
    <div class="col-6 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          >Negative</span
        >
        <input
          id="listNegativeNum"
          type="text"
          class="form-control"
          placeholder="List negative number"
          aria-label="List negative number"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>

    <!-- Negative Position -->
    <div class="col-6 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          >Position</span
        >
        <input
          id="negativeNumPos"
          type="text"
          class="form-control"
          placeholder="List negative number"
          aria-label="List negative number"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>
    <!-- Total Negative number -->
    <div class="col-4 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">Total</span>
        <input
          id="totalNegative"
          type="text"
          class="form-control"
          placeholder="Total value"
          aria-label="Total"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>

    <!-- Even Negative number -->
    <div class="col-4 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">Even</span>
        <input
          id="evenNegativeNum"
          type="text"
          class="form-control"
          placeholder="Total value"
          aria-label="Even number"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>
    <!-- Odd Negative number -->
    <div class="col-4 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">Odd</span>
        <input
          id="oddNegativeNum"
          type="text"
          class="form-control"
          placeholder="Total value"
          aria-label="Odd number"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>
  </div>

  <!--? ZERO -->
  <div
    class="row g-3 group-zero d-flex justify-content-center align-items-center"
  >
    <div
      class="col-12 item-func05 d-flex justify-content-center align-items-center"
    >
      <div class="item-func05-text">ZERO</div>
    </div>
    <!-- ZERO Number -->
    <div class="col-4 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">Zero</span>
        <input
          id="listZero"
          type="text"
          class="form-control"
          placeholder="0"
          aria-label="0"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>

    <!-- ZERO Position -->
    <div class="col-8 item-func05">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"
          >Position</span
        >
        <input
          id="zeroPos"
          type="text"
          class="form-control"
          placeholder="Zero"
          aria-label="Zero"
          aria-describedby="basic-addon1"
          readonly
        />
      </div>
    </div>
  </div>
</div>
  `;
  // Show preview your array
  document.getElementById(
    "reviewArrFunc05"
  ).innerHTML = `<span class="your-arr">[${originalArr.join(", ")}]</span>`;
};
//TODO ------------------------------------ Bài 6: Find X in array ----------------------------------- */
//* Bài 6- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm N phần tử,
// nhập/tạo phần tử số nguyên V. Chương trình tìm xem V có nằm trong gg số nguyên không?
// Nếu V thuộc mảng số nguyên thì in ra "V is in the array"
// còn lại in ra "V is not in the array".

// hàm search value
const searchValueArr = () => {
  // remove class hide-form
  document.getElementById("resultSearchVal").classList.remove("hide-form");

  // get dữ liệu cần tìm kiếm
  let getSearchValue = document.getElementById("searchValue").value;

  // get element success (found)
  let getSucess = document.querySelector(".result-success");

  // get element fail (not found)
  let getFail = document.querySelector(".result-fail");

  for (let i = 0; i < getListArr.length; i++) {
    //? Nếu tìm thấy
    if (getListArr[i] == parseInt(getSearchValue)) {
      // ẩn trạng thái fail
      getFail.classList.add("hide-form");

      // hiện trạng thái success
      getSucess.classList.remove("hide-form");

      // gán giá trị
      document.getElementById("valueFound").innerHTML = getSearchValue;

      // Gọi hàm show vị trí
      showPositionSearch(getSearchValue);
      break;
    }
    //? Nếu không tìm thấy
    else {
      // ẩn trạng thái success
      getSucess.classList.add("hide-form");

      // hiện trạng thái fail
      getFail.classList.remove("hide-form");

      // gán giá trị
      document.getElementById("valueNotFound").innerHTML = getSearchValue;

      // Gọi hàm show vị trí
      showPositionSearch(getSearchValue);
    }
  }
};

//* hàm show vị trí tìm kiếm
const showPositionSearch = (value) => {
  // khai báo mảng vị trí
  let getPositionSearchVal = [];

  for (let i = 0; i < getListArr.length; i++) {
    // Nếu tìm thấy giá trị trong mảng
    if (getListArr[i] == parseInt(value)) {
      // push giá trị thứ i vào mảng mới kèm theo <span> có class found-color
      getPositionSearchVal.push(
        `<span class="found-color">${getListArr[i]}</span>`
      );
    }
    // Nếu không tìm thấy push giá trị thứ i vào mảng mà không kèm theo <span>
    else {
      getPositionSearchVal.push(getListArr[i]);
    }
  }

  // Chạy lại vòng for để thực hiện inner HTML cho hợp lý
  for (let i = 0; i < getListArr.length; i++) {
    // Nếu tìm thấy giá trị trong mảng
    if (getListArr[i] == parseInt(value)) {
      //? innerHTML mảng có class
      document.getElementById(
        "resultSearchFunc06"
      ).innerHTML = `[${getPositionSearchVal.join(" , ")}]`;
      break;
    }
    // Nếu không tìm thấy
    else {
      //? innerHTML mảng gốc không có class
      document.getElementById(
        "resultSearchFunc06"
      ).innerHTML = `[${getListArr.join(", ")}]`;
    }
  }
};

//! Hàm show func06: Bài 6 _ Find X in array
const showFunc06 = () => {
  document.getElementById("func06").innerHTML = `
 <p class="title-func">6. Functional: Find X in array</p>

  <div class="searchX w-25">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">Original</span>
      <input
        id="reviewArrFunc06"
        type="text"
        class="form-control"
        placeholder="Original array"
        aria-label="Original array"
        aria-describedby="basic-addon1"
        disabled
      />
    </div>

    <!-- show status search -->
    <div class="result-text mt-1 mb-3 d-flex justify-content-between">
      <!-- found -->
      <div class="result-success hide-form">
        <i class="result-icon-success fa-solid fa-check"></i>
        <span class="result-text-success">
          <span id="valueFound"></span> is exists in array!</span
        >
      </div>

      <!-- not found -->
      <div class="result-fail hide-form">
        <i class="result-icon-fail fa-solid fa-xmark"></i>
        <span class="result-text-fail">
          <span id="valueNotFound"></span> is not exists in array!</span
        >
      </div>

      <!-- add item -->
      <span onclick="addItemSearch()" class="btn-add-item hide-form">
        <span class="add-item-text">Add</span>
        <i class="add-item-icon fa-solid fa-square-plus"></i>
      </span>

      <!-- delete item -->
      <span onclick="deleteItemSearch()" class="btn-delete-item hide-form">
        <span class="delete-item-text">Delete</span>
        <i class="delete-item-icon fa-solid fa-trash-can"></i>
      </span>
    </div>

    <span class="resultActionAddDel"></span>
    <!-- Result Search -->
    <div id="resultSearchVal" class="mb-3 mt-1 hide-form">
      <div class="resultSearch border border-secondary">
        <span class="resultSearch-title fw-bold">Result:</span>
        <span id="resultSearchFunc06" class="resultSearch-text"></span>
      </div>
    </div>

    <!-- Search -->
    <div class="row g-3">
      <div class="input-group mb-1 col-8">
        <span class="input-group-text" id="basic-addon1">Search</span>
        <input
          id="searchValue"
          type="number"
          class="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />

        <!-- btn search -->
        <button
          onclick="searchValueArr()"
          class="btn-search btn btn-primary"
          type="button"
          id="btnSearch"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  </div>
`;
  // Show preview your array
  document.getElementById("reviewArrFunc06").value = `[${originalArr.join(
    ", "
  )}]`;
};

//TODO ------------------------------------ Bài 7: Find X & Add X to array ----------------------------------- */
//* Bài 7- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm N phần tử,
// nhập/tạo phần tử số nguyên V. Chương trình kiểm tra xem V có thuộc mảng đã cho không,
// nếu V không thuộc mảng đã cho thêm V vào mảng

// hàm add item
const addItemSearch = () => {
  // get dữ liệu cần tìm kiếm
  let getSearchValue = document.getElementById("searchValue").value;

  // Push item vào mảng gốc
  getListArr.push(getSearchValue);

  // Gọi hàm show vị trí tìm kiếm
  showPositionSearch(getSearchValue);

  document.querySelector(".resultActionAddDel").innerHTML = `
  <i class="result-icon-success fa-solid fa-check"></i>
  Added ${getSearchValue} into array
  `;

  document.querySelector(".resultActionAddDel").classList.add("add-item-text");

  document
    .querySelector(".resultActionAddDel")
    .classList.remove("delete-item-text");
};

//! Hàm show func07: Bài 7 _ Find X & Add X to array
const showFunc07 = () => {
  document.querySelector(".btn-add-item").classList.remove("hide-form");
};

//TODO ------------------------------------ Bài 8: Find X & Delete X from array ----------------------------------- */
//* Bài 8- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm N phần tử,
// nhập/tạo phần tử số nguyên V. Chương trình kiểm tra xem V có thuộc mảng đã cho không,
// nếu V thuộc mảng đã cho xoá V khỏi mảng
// (Bản chất việc xoá ở đây tức là dịch phần tử ở bên phải V sang vị trí của V,
// và gán 0 cho phần tử cuối cùng của mảng)

// hàm delete item
const deleteItemSearch = () => {
  // get dữ liệu cần tìm kiếm
  let getSearchValue = document.getElementById("searchValue").value;
  for (let i = 0; i <= getListArr.length; i++) {
    //? Nếu tìm thấy
    if (getListArr[i] == parseInt(getSearchValue)) {
      // nếu tìm thấy phần tử, sẽ xóa phần tử đó
      //? splice(i,1): Xóa 1 phần tử tại vị trí i
      getListArr.splice(i, 1);

      document.querySelector(".resultActionAddDel").innerHTML = `
      <i class="result-icon-success fa-solid fa-check"></i>
      Deleted ${getSearchValue} from array
      `;

      document
        .querySelector(".resultActionAddDel")
        .classList.add("add-item-text");

      document
        .querySelector(".resultActionAddDel")
        .classList.remove("delete-item-text");
    } else {
      document.querySelector(".resultActionAddDel").innerHTML = ` 
      <i class="result-icon-fail fa-solid fa-xmark"></i>
      Not found ${getSearchValue} in array! Cannot delete
      `;

      document
        .querySelector(".resultActionAddDel")
        .classList.add("delete-item-text");
      // Gọi hàm show vị trí tìm kiếm
    }
    showPositionSearch(getSearchValue);
  }
};

//! Hàm show func08: Bài 8 _ Find X & Delete X from array
const showFunc08 = () => {
  document.querySelector(".btn-delete-item").classList.remove("hide-form");
};

//TODO ------------------------------------ Bài 9: Sort array ----------------------------------- */
//* Bài 9- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm N phần tử.
// Chương trình sắp xếp mảng theo thứ tự tăng/giảm dần và hiển thị ra mảng đã được sắp xếp.

// Hàm sort tăng/giảm dần (A-Z)
const sortArrayFunc09 = () => {
  let getAZ = document.getElementById("sortA-Z");
  let getZA = document.getElementById("sortZ-A");
  let swap;
  let sortArrAZ = [];

  for (let i = 0; i < getListArr.length; i++) {
    for (let j = getListArr.length - 1; j > i; j--) {
      // Nếu phần tử thứ j nhỏ hơn phần tử thứ j-1
      //? ví dụ: a[j] = 5; a[j-1] = 7 <=> [...,7,5] --> 7 đến 5 ko tăng dần
      // console.log(
      //   "\n************************************************************************************************"
      // );
      // console.log("*** Check i =", i, " ***");
      // console.log(
      //   "*** ---> Check j =",
      //   j,
      //   "=> arr5[j] < arr5[j-1] (",
      //   getListArr[j],
      //   "<",
      //   getListArr[j - 1],
      //   ") ***"
      // );
      // console.log(
      //   "************************************************************************************************\n"
      // );

      //? Nếu phần tử thứ j: a[j] (cuối cùng) < vị trí thứ j-1: a[j-1] (gần cuối)\
      // a[j] < a[j-1] ==> phần tử cuối < phần tử gần cuối ==> not tăng dần
      // Đổi chỗ 2 phần tử này
      if (parseInt(getListArr[j]) < parseInt(getListArr[j - 1])) {
        // gán giá trị phần tử cuối cho swap
        swap = getListArr[j];

        // gán giá trị phần tử cuối thành giá trị phần tử gần cuối
        getListArr[j] = getListArr[j - 1];

        // Phần tử gần cuối gán giá trị swap
        getListArr[j - 1] = swap;

        // //? ------------------------------ STEP BY STEP ------------------------------ */
        // console.log("=> TRUE --> thực hiện:");
        // console.log("-------- < Run > --------");
        // console.log("Array ban đầu:", originalArr);
        // console.log("i:", i);
        // console.log("j:", j);
        // console.log("getListArr[i]:", getListArr[i]);
        // console.log("swap:", swap);
        // console.log("getListArr[j]:", getListArr[j]);
        // console.log("getListArr[j-1]:", getListArr[j - 1]);
        // console.log("Array đã xử lý:", getListArr);
        // console.log("-------- / End Run / --------\n");
      } else {
        // console.log("=> FALSE --> giảm j =", j - 1, "và chạy tiếp vòng lặp\n");
      }
    }
    // push phần tử thứ i vào mảng tăng dần để sử dụng
    sortArrAZ.push(getListArr[i]);
  }

  // Nếu sort A-Z checked thì in array sortArrAZ
  if (getAZ.checked == true) {
    //! &nbsp; --> create spacing before <span>
    document.getElementById("resulrSortArrFunc09").value = `[${sortArrAZ.join(
      ", "
    )}]`;
  }
  // ngược lại đảo ngược mảng sortArrAZ --> sẽ thành sort Z-A
  else {
    // gọi hàm đảo ngược mảng và truyển mảng sortArrAZ
    let sortArrZA = handleEeverseArray(sortArrAZ);
    //! &nbsp; --> create spacing before <span>
    document.getElementById("resulrSortArrFunc09").value = `[${sortArrZA.join(
      ", "
    )}]`;
  }
};

//! Hàm show func09: Bài 9 _ Sort array
const showFunc09 = () => {
  document.getElementById("func09").innerHTML = `
  <p class="title-func">9: Sort array</p>

  <div class="container-func09 w-50">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Original</span>
      <input
        id="reviewArrFunc09"
        type="text"
        class="form-control"
        placeholder="Original array"
        aria-label="Original array"
        aria-describedby="basic-addon1"
        disabled
      />
    </div>

    <div class="sort-container d-flex justify-content-between mb-2">
      <!-- sort A-Z -->
      <div class="form-check">
        <input
          onchange="sortArrayFunc09()"
          class="form-check-input sort-option"
          type="radio"
          name="flexRadioDefault"
          id="sortA-Z"
        />
        <label class="form-check-label sort-label" for="sortA-Z"
          >Sort
          <i class="sortA-Z__icon fa-solid fa-arrow-down-a-z"></i>
        </label>
      </div>

      <!-- sort Z-A -->
      <div class="form-check">
        <input
          onchange="sortArrayFunc09()"
          class="form-check-input sort-option"
          type="radio"
          name="flexRadioDefault"
          id="sortZ-A"
        />
        <label class="form-check-label sort-label" for="sortZ-A"
          >Sort
          <i class="sortZ-A__icon fa-solid fa-arrow-down-z-a"></i>
        </label>
      </div>
    </div>

    <!-- result sort -->
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Result</span>
      <input
        id="resulrSortArrFunc09"
        type="text"
        class="form-control"
        placeholder="Result sort array"
        aria-label="Result sort array"
        aria-describedby="basic-addon1"
        disabled
      />
    </span>



  </div>
  `;
  // Show preview your array
  document.getElementById("reviewArrFunc09").value = `[${originalArr.join(
    ", "
  )}]`;
};

//TODO ------------------------------------ Bài 10: Array Concatenation ----------------------------------- */
//* Bài 9- Viết chương trình khởi tạo/nhập vào 2 mảng số nguyên gồm N phần tử,
// gọi là mảng a và b.
// Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.
// Hiển thị mảng c.

// Khai báo biến số lần click addmore
let countClickAddMore = 1;

//* */ ---------------------------- Hàm add more Random Array --------------------------- */
const addMoreItem = () => {
  // Tăng biến đếm click addmore
  countClickAddMore++;
  // get số lượng random array được tạo ra
  let getRandArr = document.querySelectorAll(".container-random-arr");

  // Nếu số lượng rand arr được tạo ra < 5 thì tạo thêm
  if (getRandArr.length < 5) {
    // += --> Khi gọi func này sẽ thực hiện thêm `element` mà ko ghi đè lên element cũ
    let createRandArr = (document.getElementById(
      "group-all-randArr"
    ).innerHTML += `
    <div class="container-random-arr">
      <div class="input-group mb-3">
        <div class="input-group-text">
          <input
            class="check-this-array form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>
        <input
          type="text"
          class="new-rand-arrVal form-control color-rand-arr${countClickAddMore}"
          aria-label="Text input with checkbox"
          placeholder="New Random Array ${countClickAddMore}"
          readonly
        />
      </div>
    </div>
    `);
  }
  // Nếu số lượng rand arr được tạo ra >= 5 thì không tạo thêm
  else {
    alert("Maximun 5 new array");
    document
      .getElementById("add-new-randArr")
      .classList.add("add-new-randArr-disabled");
  }
};

//*! ------------------- hàm get all value new random array ------------------- */
const getRandom = () => {
  // new array length random from 4 -> 12
  let randomLengthArr = Math.floor(Math.random() * 9 + 4);

  // Khai báo mảng rỗng chứa các giá trị ngẫu nhiên
  let createNewArr = [];

  for (let i = 0; i < randomLengthArr; i++) {
    // Khai báo biến randomValue chứa giá trị ngẫu nhiên từ -300 -> 300
    let randomValue = Math.floor(Math.random() * 301 - Math.random() * 301);

    // push giá trị ngẫu nhiên đó vào mảng
    createNewArr.push(randomValue);
  }

  return createNewArr;
};

//* ------------------------------ hàm Check All Random Array ----------------------------- */
const checkAllArr = () => {
  let getCheckAll = document.getElementById("checkAllNewArr");

  // get danh sách tất cả element có class .check-this-array và đưa vào NodeList
  let listNewRandArr = document.querySelectorAll(".check-this-array");

  for (let i = 0; i < listNewRandArr.length; i++) {
    // Nếu như CheckAll = true
    getCheckAll.checked == true
      ? // tất cả element checked
        (listNewRandArr[i].checked = true)
      : // tất cả element unchecke
        (listNewRandArr[i].checked = false);
  }
};

//* --------------------- hàm Fill All data new rand arr --------------------- */
const fillAllArr = () => {
  let listNewRandArr = document.querySelectorAll(".new-rand-arrVal");
  for (let i = 0; i < listNewRandArr.length; i++) {
    listNewRandArr[i].value = getRandom().join(", ");
  }
};

//*? ------------------------------ hàm nối mảng ------------------------------ */
const concatArray = () => {
  // Khai báo mảng mới = mảng original và xử lý trên mảng mới, tránh thay đổi mảng original
  let newArrayConcat = originalArr;

  let getCheckOriginalArr = document.getElementById("checkOriginalArr");

  // Khai báo biến chưa NodeList check-this-array: tất cả danh sách Random Array
  let getCheckThisRandArr = document.querySelectorAll(".check-this-array");

  // Khai báo biến chứa NodeList new-rand-arrVal: tất cả value của danh sách Random Array
  let getValueCheckThisRandomArr =
    document.querySelectorAll(".new-rand-arrVal");

  //? Nếu Original no check
  if (getCheckOriginalArr.checked == false) {
    alert("Checked Original Array to Concatenation");
  } else {
    for (let i = 0; i < getCheckThisRandArr.length; i++) {
      //? Kiểm tra Random Array nào được check
      if (getCheckThisRandArr[i].checked == true) {
        //? getValueCheckThisRandomArr[i].value: Get value của Random Array được check đó
        // gán màu cho từng array để phân biệt
        newArrayConcat = newArrayConcat.concat(
          `<span class="color-rand-style color-rand-arr${i + 1}">
          ${getValueCheckThisRandomArr[i].value}
          </span>`
        );

        // In ra màn hình
        document.getElementById("resultConcatenation").innerHTML = `
        <b>Result:</b> <br>
        ${newArrayConcat.join(", ")}
        `;
      } else {
        // alert("Check at least one Random Array");
        console.log(false);
      }
    }
  }
};

//! Hàm show func10: Bài 10 _ Array Concatenation
const showFunc10 = () => {
  document.getElementById("func10").innerHTML = `
   <p class="title-func">10: Array Concatenation</p>
    <div class="container-func10 w-75">
      <!-- original array -->
      <div id="containerOriginalArr" class="container-original-arr">
        <label class="form-label">Original Array</label>
        <div class="input-group mb-4">
          <div class="input-group-text">
            <input
              id="checkOriginalArr"
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>
          <input
            id="reviewArrFunc10"
            type="text"
            class="form-control"
            aria-label="Text input with checkbox"
            placeholder="Original Array"
            readonly
          />
        </div>
      </div>

      <!-- random new array -->
      <div id="group-all-randArr">
        <div class="container-random-arr">
          <!-- Check All -->
          <input
            onclick="checkAllArr()"
            id="checkAllNewArr"
            class="check-all-randArr form-check-input"
            type="checkbox"
            value=""
            data-bs-toggle="tooltip"
            title="Check All New Array below"
          />

          <!-- label random array -->
          <label class="form-label ms-2 mb-3" for="checkAllNewArr"
            >Random Array</label
          >

          <!-- icon fill data -->
          <i
            onclick="fillAllArr()"
            class="fa-solid fa-fill-drip ms-1"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Random new array"
          ></i>

          <!-- form input -->
          <div class="input-group mb-3">
            <div class="input-group-text">
              <input
                class="check-this-array form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
            <input
              type="text"
              class="new-rand-arrVal form-control color-rand-arr1"
              aria-label="Text input with checkbox"
              placeholder="New Random Array 1"
              readonly
            />
          </div>
        </div>
      </div>

      <!-- add more -->
      <div
        onclick="addMoreItem()"
        id="add-new-randArr"
        class="add-new-randArr text-success fw-medium border-bottom border-dark-subtle"
        type="button"
      >
        <i class="fa-solid fa-circle-plus"></i>
        Add more
      </div>

      <!-- RESULT Concatenation -->
      <div id="resultConcatenation"></div>

      <!-- btn concat -->
      <button
        onclick="concatArray()"
        class="btn btn-dark border border-light-subtle"
      >
        Concatenation
        <i class="fa-solid fa-link"></i>
      </button>
    </div>
   `;

  // Show preview your array
  document.getElementById("reviewArrFunc10").value = `[${originalArr.join(
    ", "
  )}]`;
};

//* ------------------------------------ - ----------------------------------- */
// Hàm get value theo chức năng
const handleSelectChange = (e) => {
  // e: event
  // target: khi chọn option
  // value: lấy value của option
  //? ==> khi 'onchange' sẽ bắt sự kiện 'change' và lấy 'giá trị tại target' đã được 'change'
  let itemSelected = e.target.value;
  if (itemSelected == 1) {
    showFunc01();
  } else if (itemSelected == 2) {
    showFunc02();
  } else if (itemSelected == 3) {
    showFunc03();
  } else if (itemSelected == 4) {
    showFunc04();
  } else if (itemSelected == 5) {
    showFunc05();
  } else if (itemSelected == 6) {
    showFunc06();
  } else if (itemSelected == 7) {
    showFunc07();
  } else if (itemSelected == 8) {
    showFunc08();
  } else if (itemSelected == 9) {
    showFunc09();
  } else {
    showFunc10();
  }
};

/* ------------------------------------ - ----------------------------------- */

//? -------------------------------------------------------------------------- */
//?                               Common function                              */
//? -------------------------------------------------------------------------- */
// Hàm xử lý đảo ngược mảng bất kỳ được truyền vào với biến số là array
const handleEeverseArray = (array) => {
  // Khai báo mảng mới là mảng đảo ngược với mảng ban đầu
  let reversedArr = [];

  // Chạy i bắt đầu từ length -1 của mảng truyền vào
  // Chạy đến khi nào i = 0
  for (let i = array.length - 1; i >= 0; i--) {
    // push các phần tử vào mảng đảo ngược
    reversedArr.push(array[i]);
  }
  // return giá trị mảng đảo ngược của mảng được truyền vào
  return reversedArr;
};

//*!!! ------------------- START: Remove duplicate Array ------------------ */
const removeDuplicateArray = (array) => {
  // Khai báo mảng rỗng
  var unique = [];

  array.forEach((item, index) => {
    // nếu vị trí đầu tiên của item === vị trí của index chạy tăng dần từ 0
    if (array.indexOf(item) === index) {
      unique.push(item);
    }
  });
  return unique;
};

//*!!! ------------------- END: Remove duplicate Array ------------------ */

//*?s ------------------- START: Check array are equal ------------------ */
const areEqual = (arr1, arr2) => {
  let lenArr1 = arr1.length;
  let lenArr2 = arr2.length;

  // If lengths of array are not equal means
  // array are not equal
  if (lenArr1 != lenArr2) return false;

  // Sort both arrays
  arr1.sort();
  arr2.sort();

  // Linearly compare elements
  for (let i = 0; i < lenArr1; i++) if (arr1[i] != arr2[i]) return false;

  // If all elements were same.
  return true;
};

//*?s ------------------- END: Check array are equal ------------------ */

//TODO ------------------------------------ 7. Luyện tập mảng 02 ----------------------------------- */

//* 7.4. Viết một chương trình để đếm số từ trong một chuỗi
// Hàm đếm số ký tự đã nhập
const countLetter = () => {
  let inputLetter = document.getElementById("inputLetter").value;
  console.log(inputLetter.length);

  // Khai báo biến đêm ký tự space
  let countSpacing = 0;

  for (let i = 0; i < inputLetter.length; i++) {
    // Nếu gặp ký tự space thì tăng biến đếm
    if (inputLetter[i] == 0) {
      countSpacing += 1;
    }
  }

  document.getElementById(
    "resultCountLetter"
  ).innerHTML = `<b>Result:</b> Have total <span class="color-count-letter">${
    inputLetter.length
  }</span> letter in textbox <br>
  Have 
  <span class="color-count-letter">${
    parseInt(inputLetter.length) - parseInt(countSpacing)
  }</span> letter
  And 
  <span class="color-count-letter">${countSpacing}</span> spacing
  `;
};

//* 7.5. Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.

// Hàm compare String
const compareStringArea = () => {
  // Khai báo biến chứa dữ liệu compareArr01()
  let compare01 = compareArr01();

  // Khai báo biến chứa dữ liệu compareArr02()
  let compare02 = compareArr02();

  // Khai báo mảng chứa các phần tử bao gồm class color compare
  let getWordList01 = [];

  // Khai báo mảng chứa các phần tử bao gồm class color compare
  let getWordList02 = [];

  //!!! Set thành mảng rỗng để xóa các giá trị đã lưu trước đó
  getIndexI = [];
  getIndexJ = [];

  for (let i = 0; i < compare01.length; i++) {
    for (let j = 0; j < compare02.length; j++) {
      // Nếu như cụm từ compare01 != cụm từ compare02
      if (compare01[i] != compare02[j]) {
        // Thêm class color
        getWordList01.push(
          `<span class="compare01 compare-color">${compare01[i]}</span>`
        );
        getWordList02.push(
          `<span class="compare02 compare-color">${compare02[j]}</span>`
        );
      }
      // Nếu 2 từ giống nhau thì thêm class kèm sẽ push kèm vị trí
      else {
        getWordList01.push(
          `<span class="compare01 compare-color">${compare01[i]}</span>`
        );
        getIndexI.push(i);

        getWordList02.push(
          `<span class="compare02 compare-color">${compare02[j]}</span>`
        );
        getIndexJ.push(j);
      }
    }
  }

  // Rmove duplicate WordList
  let removeDup01 = removeDuplicateArray(getWordList01);
  let removeDup02 = removeDuplicateArray(getWordList02);

  // Lấy phần từ giống nhau ở compare01
  let getArrCompare01 = document.getElementsByClassName("compare01");
  // console.log("NodeList - compare01:", getArrCompare01);

  // Lấy phần từ giống nhau ở compare02
  let getArrCompare02 = document.getElementsByClassName("compare02");
  // console.log("NodeList - compare02:", getArrCompare02);

  // In ra chuỗi ký tự ban đầu
  document.getElementById("resultCompare01").innerHTML = removeDup01.join(" ");
  document.getElementById("resultCompare02").innerHTML = removeDup02.join(" ");

  return { getArrCompare01, getArrCompare02 };
};

// Khai báo mảng IndexI chứa các vị trí phần tử có giá trị = giá trị IndexJ
let getIndexI = [];

// Khai báo mảng IndexJ chứa các vị trí phần tử có giá trị = giá trị IndexI
let getIndexJ = [];

//* -------------------------- Hàm xác nhận compare -------------------------- */
const comfirmCompare = () => {
  compareStringArea();
  // Khai báo biến chứa giá trị 2 mảng compare
  //? (compareStringArea() là Object do return bên trên)
  let getArrCompare = compareStringArea();
  console.log(getIndexI);
  console.log(getIndexJ);

  // Khai báo biến lấy giá trị của Object trên
  //? --> (lấy được 2 mảng)
  let getArrCompareVal = Object.values(getArrCompare);
  console.log(getArrCompareVal[0]);
  console.log(getArrCompareVal[1]);

  // Remove Duplicate value in arr
  getIndexI = removeDuplicateArray(getIndexI);
  getIndexJ = removeDuplicateArray(getIndexJ);

  console.log(getIndexI);
  console.log(getIndexJ);

  // ? Kiểm tra, nếu 2 mảng bằng nhau --> 2 string giống nhau
  if (areEqual(getIndexI, getIndexJ)) {
    alert("Both String is the same");
  }
  // ngược lại --> check trùng
  else {
    // Lấy độ dài của mảng IndexI để lấy được vị trí giá trị giống nhau của Compare01
    for (let i = 0; i < getIndexI.length; i++) {
      //? getArrCompareVal[0]: lấy giá trị đầu tiên của Object --> lấy được Arr Compare01
      getArrCompareVal[0][getIndexI[i]].classList.remove("compare-color");
      console.log(getArrCompareVal[0][getIndexI[i]]);
    }

    // Lấy độ dài của mảng IndexJ để lấy được vị trí giá trị giống nhau của Compare02
    for (let j = 0; j < getIndexJ.length; j++) {
      //? getArrCompareVal[1]: lấy giá trị thứ 2 của Object --> lấy được Arr Compare02
      getArrCompareVal[1][getIndexJ[j]].classList.remove("compare-color");
      console.log(getArrCompareVal[1][getIndexJ[j]]);
    }
  }
};

//* --------------------------- Hàm arr compare 01 --------------------------- */
const compareArr01 = () => {
  let getInputCompare01 = document.getElementById("inputCompare01").value;

  //TODO Khai báo mảng chứa compare01
  let ArrCompare01 = [];

  //? split(): String to Array
  ArrCompare01 = getInputCompare01.split(" ");
  return ArrCompare01;
};

//* --------------------------- Hàm arr compare 02 --------------------------- */
const compareArr02 = () => {
  let getInputCompare02 = document.getElementById("inputCompare02").value;

  //TODO Khai báo mảng chứa compare02
  let ArrCompare02 = [];

  //? split(): String to Array
  ArrCompare02 = getInputCompare02.split(" ");

  return ArrCompare02;
};

// Hàm compare color
const colorCompare = (compare01, compare02) => {
  console.log("COMPARE ARR 01: ", compare01);
  console.log("COMPARE ARR 02: ", compare02);
};
