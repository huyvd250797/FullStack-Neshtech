// //! Dùng preventDefault() cho input type="submit"

// const preventDefaultItem = (iditem) => {
//   document
//     .getElementById(`"${iditem}"`)
//     .addEventListener("click", function (e) {
//       e.preventDefault();
//     });
// };

// hàm change format date to DD/MM/YYYY
const changedateformat = (date) => {
  let dateFormated = date.split("-").reverse().join("/");
  return dateFormated;
};

// hàm clear all data add new
const clearDataAddNew = () => {
  document.getElementById("addNewExpenseDate").value = "";
  document.getElementById("radioSpending").checked = false;
  document.getElementById("radioIncome").checked = false;
  document.getElementById("addNewTypeSpending").value = "";
  document.getElementById("addNewGroupItem").value = "";
  document.getElementById("addNewAmount").value = "";
  document.getElementById("addNewDescription").value = "";
  document.getElementById("addNewNote").value = "";
};

//* hàm color picker
const getColorPicker = () => {
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
  return groupItemVal;
};

//* ----------------- hàm khai báo list danh sách group item ----------------- */
// thêm mới item ở đây
const listGroupItem = () => {
  let listItem = [
    {
      id: 1,
      value: "Debt Payment",
    },
    {
      id: 2,
      value: "Drink",
    },
    {
      id: 3,
      value: "Entertain",
    },
    {
      id: 4,
      value: "Food",
    },
    {
      id: 5,
      value: "Gasoline",
    },
    {
      id: 6,
      value: "Salary",
    },
    {
      id: 7,
      value: "Saving",
    },
    {
      id: 8,
      value: "Invest",
    },
  ];

  return listItem;
};

// hàm create Group Item
const createGroupItem = () => {
  // get list group item
  let listGroupItems = listGroupItem();

  let getListSelect = document.getElementById("addNewGroupItem");

  // Khai báo biến lấy giá trị Object
  let getValuesObject;

  for (let i = 0; i < listGroupItems.length; i++) {
    // Lấy giá trị Object bao gồm [2, "Drink"]
    getValuesObject = Object.values(listGroupItems[i]);

    // innerHTML giá trị đó vào option
    getListSelect.innerHTML += `
      <option value="${i + 1}">${getValuesObject[1]}</option>
    `;
  }
};

//*TODO ------------------------- hàm Add New ------------------------- */
const createNewExpense = () => {
  let getType = chooseType();
  let getTypeSpending = chooseTypeSpending();

  // Khai báo biến lấy list groupItem
  let getListGroupItem = listGroupItem();

  // Get value Group item
  let getSelectedItem = getGroupItem();

  console.log(getSelectedItem);

  // Khai báo biến get value Object
  let getValueObjItem;

  // Khai báo biến get value item
  let getValueItem;

  // Khởi chạy i từ 1, vì nếu chạy từ 0 khi đến line 202 thì 0 - 1 sẽ âm ==> Không lấy dc giá trị
  for (let i = 1; i <= getListGroupItem.length; i++) {
    if (getSelectedItem == i) {
      // Lấy values của Object ==> lấy được mảng gồm [7, "Saving"]
      getValueObjItem = Object.values(getListGroupItem[i - 1]);
      console.log(getValueObjItem);
      // gán biến value item = value được lấy từ mảng trong object
      //?? [7, "Saving"] ==> [1] sẽ là giá trị "Saving"
      getValueItem = getValueObjItem[1];
      break;
    } else {
      getValueItem = "";
    }
  }

  let addNewDate = document.getElementById("addNewExpenseDate").value;

  // change YYYY-MM-DD --> DD/MM/YYYY
  addNewDate = changedateformat(addNewDate);

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
    document.getElementById("addNewExpenseModal");

    //*!!! ------------------------------- START: HIDE MODAL ------------------------------- */
    //  Khai báo biến lấy element modal
    let getModalAddNew = document.getElementById("addNewExpenseModal");
    let modal = bootstrap.Modal.getInstance(getModalAddNew);
    modal.hide();
    //*!!! ------------------------------- END: HIDE MODAL ------------------------------- */

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
    <td>${getValueItem}</td>
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
    // Sau khi lưu thành công clear all data in addnew
    clearDataAddNew();
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
