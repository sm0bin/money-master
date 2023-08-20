
const getElement = (inputId) => {
    return document.getElementById(inputId);
}

const getElementValue = (inputId) => {
    const inputValue = getElement(inputId).value;
    getElement(inputId).value = "";

    if (inputValue == "") {
        return 0;
    }
    return parseInt(inputValue);
    // return parseInt(getElement(inputId).value);
}



const calculateButton = getElement('calculate-btn');
const saveButton = getElement('save-btn');
const totalExpense = getElement('total-expense');
const balanceElement = getElement('balance');
const savingAmountElement = getElement("saving-amount");
const remainingBalanceElement = getElement("remaining-balance");

let income = 0;
let balance = 0;

// console.log(food, typeof (food));
calculateButton.addEventListener("click", () => {
    income = getElementValue('income');

    const food = getElementValue('food');
    const rent = getElementValue('rent');
    const clothes = getElementValue('clothes');
    const expense = food + rent + clothes;

    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes) || income < 0 || food < 0 || rent < 0 || clothes < 0) {
        alert("Input not valid!");
        return;
    }

    totalExpense.innerText = expense;
    balance = income - expense;
    balanceElement.innerText = balance;
})

saveButton.addEventListener("click", () => {
    const save = getElementValue('save');

    const savingAmount = income * save / 100;
    const remaining = balance - savingAmount;

    if (isNaN(income) || isNaN(save) || income < 0 || save < 0) {
        alert("Input not valid!");
        return;
    }
    if (balance < 0) {
        alert("Balance is negative!");
        return;
    }

    savingAmountElement.innerText = savingAmount;
    remainingBalanceElement.innerText = remaining;

})
