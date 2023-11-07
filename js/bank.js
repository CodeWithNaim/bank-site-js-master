// get all input amount

function getInputAmount(inputId) {
  const input = document.getElementById(inputId);
  const value = Number(input.value);
  input.value = "";
  if (value > 0) {
    showDipositeAmount(value);
    showTotalBalanceAmount(value);
  } else {
    alert("Enter Valid Amount!");
  }
  return value;
}

// show diposite amount start

function showDipositeAmount(currentInputAmount) {
  let prevDepo = document.getElementById("deposit-amount");

  prevDepo.innerText = Number(prevDepo.innerText) + currentInputAmount;
}

// show diposite amount end

document.getElementById("deposit-btn").addEventListener("click", function () {
  getInputAmount("deposit-input");
});

// show TotalBalance Amount start

function showTotalBalanceAmount(depositeAmount) {
  let balanceInput = document.getElementById("balance-amount");

  balanceInput.innerText = Number(balanceInput.innerText) + depositeAmount;
}

// show TotalBalance Amount end

// withdraw input funciton start

document
  .getElementById("withdraw-btn")
  .addEventListener("click", withdrawBlance);

function withdrawBlance() {
  let withdrawInput = document.getElementById("withdraw-input");
  let withDrawAmount = Number(withdrawInput.value);
  withdrawInput.value = "";

  let blanceAmount = +document.getElementById("balance-amount").innerText;
  // let currentTotalBlance = blanceAmount - withDrawAmount;

  if (withDrawAmount > blanceAmount) {
    alert(
      `Your current total Balance is ${blanceAmount}. please enter valid amount `
    );
  } else {
    let currentTotalBlance = blanceAmount - withDrawAmount;

    document.getElementById("balance-amount").innerText = currentTotalBlance;

    let prevWithroAmount = document.getElementById("withdraw-amount");
    prevWithroAmount.innerText =
      Number(prevWithroAmount.innerText) + withDrawAmount;
  }
}
// withdraw input funciton end
