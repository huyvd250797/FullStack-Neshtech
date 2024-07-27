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

/* ---------------------------- hàm open Add new ---------------------------- */
// const openAddNew = () => {

// }

/* -------------------------- hàm change type ------------------------- */
const changeType = () => {
  let addNewType = document.getElementById("addNewType").value;
  let addNewTypeSpending = document.getElementById("addNewTypeSpending").value;

  let addNewTypeSpendingSelect = document.getElementById("addNewTypeSpending");

  //TODO  Check dữ liệu type
  //? Nếu value type = 1 ==> Spending
  if (addNewType == 1) {
    // gán giá trị = Spending
    addNewType = "Spending";

    // gỡ disable type spending
    addNewTypeSpendingSelect.disabled = false;
  }

  //? Nếu value type = 2 ==> Income
  else if (addNewType == 2) {
    // gán giá trị = Income
    addNewType = "Income";

    // disable type spending
    addNewTypeSpendingSelect.disabled = true;

    // gán giá trị
    addNewTypeSpending = "";
  }

  //TODO  Check dữ liệu type spending
  //? Nếu value type = 1 ==> Spending
  if (addNewTypeSpending == 1) {
    // gán giá trị = Spending
    addNewTypeSpending = "Must Have";
  }

  //? Nếu value type = 2 ==> Income
  else if (addNewTypeSpending == 2) {
    // gán giá trị = Income
    addNewTypeSpending = "Nice to Have";
  } else if (addNewTypeSpending == 3) {
    addNewTypeSpending = "Wasted";
  } else {
    addNewTypeSpending == "";
  }

  return { addNewType, addNewTypeSpending };
};

//*? ------------------------- hàm Create new product ------------------------- */
const createNewExpense = () => {
  // Get value type & type-Spending từ hàm changeType return ra object
  let getValType = Object.values(changeType());

  //? getValType[0]: Type
  //? getValType[1]: Type-Spending

  console.log(getValType);

  let addNewDate = document.getElementById("addNewExpenseDate").value;
  let addNewGroupItem = document.getElementById("addNewGroupItem").value;
  let addNewAmount = document.getElementById("addNewAmount").value;
  let addNewDescription = document.getElementById("addNewDescription").value;
  let addNewNote = document.getElementById("addNewNote").value;
  let getTableBody = document.getElementById("table-body");

  if (addNewDate.length == 0) {
    alert("Choose Date Expense");
  } else if (getValType[0].length == 0) {
    alert("Choose Type Expense");
  } else if (getValType[1].length == 0 && getValType[0] == "Spending") {
    alert("Choose Type Spending Expense");
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
    <td>${getValType[0]}</td>
    <td>${getValType[1]}</td>
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
