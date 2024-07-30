// //! Dùng preventDefault() cho input type="submit"

// const preventDefaultItem = (iditem) => {
//   document
//     .getElementById(`"${iditem}"`)
//     .addEventListener("click", function (e) {
//       e.preventDefault();
//     });
// };

// hàm change format date
function changedateformat(val) {
  const myArray = val.split("-");

  let year = myArray[0];
  let month = myArray[1];
  let day = myArray[2];

  let formatteddate = day + "-" + month + "-" + year;

  return formatteddate;
}

//* hàm color picker
const getColorPicker = () => {
  let getBgColor = document.getElementById("iconColorBgPicker").value;
  let getTextColor = document.getElementById("iconColorTextPicker").value;
  let backgroundColorIcon = document.getElementById("iconGroupItem");
  let colorIcon = document.getElementById("icon-group-item");

  // Gán set background color theo màu đã chọn
  backgroundColorIcon.style.backgroundColor = getBgColor;

  // Gán set color theo màu đã chọn
  colorIcon.style.color = getTextColor;
};

//* ------------------- hàm preview background color picker ------------------ */
const backgroundColorPreview = () => {
  let getBgColor = document.getElementById("iconColorBgPicker").value;
  let getBgColorPreview = document.getElementById("iconBgColorPreview");
  getBgColorPreview.style.backgroundColor = getBgColor;
};

//* ---------------------- hàm preview text color picker --------------------- */
const textColorPreview = () => {
  let getTextColor = document.getElementById("iconColorTextPicker").value;
  let getTextColorPreview = document.getElementById("iconTextTextPreview");
  getTextColorPreview.style.color = getTextColor;
};

//*? -------------------------- hàm choose type ------------------------- */
const chooseType = () => {
  let btnSpending = document.getElementById("radioSpending");
  let btnIncome = document.getElementById("radioIncome");

  // get element addNewTypeSpending
  let addNewTypeSpending = document.getElementById("addNewTypeSpending");

  let checkedBtn;

  //? Nếu btnSpending check
  if (btnSpending.checked == true) {
    // gán giá trị là Spending
    checkedBtn = "Spending";
    addNewTypeSpending.disabled = false;
  }
  //? Nếu btnIncome check
  else if (btnIncome.checked == true) {
    // gán giá trị là Income
    checkedBtn = "Income";
    addNewTypeSpending.disabled = true;
    addNewTypeSpending.value = "";
  }
  // ngược lại gán giá trị rỗng
  else {
    checkedBtn = "";
  }

  return checkedBtn;
};

//*? -------------------------- hàm choose type-Spending ------------------------- */
const chooseTypeSpending = () => {
  let getValSelected = document.getElementById("addNewTypeSpending").value;
  let getValue;

  //? nếu giá trị được chọn là 1
  if (getValSelected == 1) {
    // gán giá trị Must Have và add class Must Have
    getValue = `<span class="color-must-have">Must Have</span>`;
  }
  //? nếu giá trị được chọn là 2
  else if (getValSelected == 2) {
    // gán giá trị Nice to Have và add class Nice to Have
    getValue = `<span class="color-nice-to-have">Nice to Have</span>`;
  }
  //? nếu giá trị được chọn là 3
  else if (getValSelected == 3) {
    // gán giá trị Wasted và add class Wasted
    getValue = `<span class="color-wasted">Wasted</span>`;
  }
  // ngược lại gán giá trị rỗng
  else {
    getValue = "";
  }

  return getValue;
};

/* -------------------------- hàm group item ------------------------- */
const getGroupItem = () => {
  let groupItemVal = document.getElementById("addNewGroupItem").value;
  console.log(groupItemVal);
};

//*TODO ------------------------- hàm Add New ------------------------- */
const createNewExpense = () => {
  let getType = chooseType();
  let getTypeSpending = chooseTypeSpending();

  // Get value Group item
  getGroupItem();

  let addNewDate = document.getElementById("addNewExpenseDate").value;
  let addNewGroupItem = document.getElementById("addNewGroupItem").value;
  let addNewAmount = document.getElementById("addNewAmount").value;
  let addNewDescription = document.getElementById("addNewDescription").value;
  let addNewNote = document.getElementById("addNewNote").value;
  let getTableBody = document.getElementById("table-body");

  if (addNewDate.length == 0) {
    alert("Choose Date Expense");
  } else if (getType.length == 0) {
    alert("Choose Expense Type");
  } else if (getTypeSpending.length == 0 && getType == "Spending") {
    alert("Choose Type Spending");
  } else if (addNewGroupItem.length == 0) {
    alert("Choose Group Item Expense");
  } else if (addNewAmount.length == 0) {
    alert("Your amount is: 0 đ");
  } else if (addNewDescription.length == 0) {
    alert("Enter Description Expense");
  } else {
    // Tạo thêm 1 row dữ liệu mới
    getTableBody.innerHTML += `
  <tr class="expense-item item-1">
    <td>2024</td>
    <td>7. July</td>
    <td>${addNewDate}</td>
    <td>
      <span>${getType}</span>
    </td>
    <td>
      <span>${getTypeSpending}</span>
    </td>
    <td>${addNewAmount} đ</td>
    <td>${addNewGroupItem}</td>
    <td>${addNewDescription}</td>
    <td>X.XXX.XXX đ</td>
    <td>${addNewNote}</td>
    <td>
      <span class="expense-item__icon-edit"
        ><i class="fa-solid fa-pen-to-square"></i
      ></span>
    </td>
    <td>
      <span class="expense-item__icon-trash"
        ><i class="fa-solid fa-trash-can"></i
      ></span>
    </td>
  </tr>
  `;
  }
};

// hàm add color Spending
const addColorType = () => {
  let getType = chooseType();
};

// hàm add color Must Have
const addcolorMustHave = () => {};

// hàm add color Nice to Have
const addColorNiceToHave = () => {};

// hàm add color Wasted
const addColorWasted = () => {};
