/*
1. add event handler with the withdraw button

*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit input field
  // for input field use .value to the value inside the input field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert('please provide number')
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previewsWithdrawTotalString = withdrawTotalElement.innerText;
  const previewsWithdrawTotal = parseFloat(previewsWithdrawTotalString);

  

  const balanceTotalElement = document.getElementById("balance-total");
  const previewsBalanceTotalString = balanceTotalElement.innerText;
  const previewsBalanceTotal = parseFloat(previewsBalanceTotalString);

  if (newWithdrawAmount > previewsBalanceTotal) {
    alert('baap er bank e eto taka nai')
    return;
  }
  const currentWithdrawTotal = previewsWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;
  //  calculate current total balance
  const currentBalanceTotal = previewsBalanceTotal - newWithdrawAmount;

  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  //  step-7: clear the deposit field
});
