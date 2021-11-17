function getInputValue(inputFieldId) {
  // debugger;
  const inputField = document.getElementById(inputFieldId);
  const inputAmount = parseInt(inputField.value);
  inputField.value = "";
  return inputAmount;
}

function updateTotalBalance(currentTotalId, inputAmount) {
  const catchTotal = document.getElementById(currentTotalId);
  const total = parseInt(catchTotal.innerText);
  catchTotal.innerText = total + inputAmount;
}

function getCurrentBalance() {
  const catchBalance = document.getElementById("current-balance");
  const previousBalanceAmount = parseInt(catchBalance.innerText);
  return previousBalanceAmount;
}

function updateMainBalance(inputAmount) {
  const catchBalance = document.getElementById("current-balance");
  const previousBalanceAmount = getCurrentBalance();
  catchBalance.innerText = previousBalanceAmount + inputAmount;
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  const inputAmount = getInputValue("user-deposited-amount");
  if (inputAmount > 0) {
    updateTotalBalance("deposit-balance", inputAmount);
    updateMainBalance(inputAmount);
  } else {
    alert("Please Enter Valid Amount");
  }
});
document
  .getElementById("withdrawal-btn")
  .addEventListener("click", function () {
    const inputAmount = getInputValue("user-withdrawal-amount");
    const currentBalance = getCurrentBalance();
    if (inputAmount > 0 && inputAmount < currentBalance) {
      updateTotalBalance("withdrawal-balance", inputAmount);
      updateMainBalance(-inputAmount);
    } else {
      alert("You Don't Have That Much Balance For Withdrawal");
    }
  });
