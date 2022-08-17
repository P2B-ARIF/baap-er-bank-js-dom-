// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function (){
    // step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value; 
  const newDepositAmount = parseFloat(newDepositAmountString); 


//   step-3: get the current deposit total
//   for non-input(element other than input,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previewsDepositTotalString = depositTotalElement.innerText;
    const previewsDepositTotal = parseFloat(previewsDepositTotalString);

    // step-4: add numbers to set the total deposit
    const currrentDepositTotal = previewsDepositTotal + newDepositAmount 
    depositTotalElement.innerText = currrentDepositTotal;
    // step-5:  get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previewsBalanceTotalString = balanceTotalElement.innerText;
    const previewsBalanceTotal = parseFloat(previewsBalanceTotalString);

    //  calculate current total balance
    const currentBalanceTotal = previewsBalanceTotal + newDepositAmount;

    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;


    //  step-7: clear the deposit field
    depositField.value = '';
})
