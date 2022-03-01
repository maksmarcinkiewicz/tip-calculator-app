const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipButton = document.querySelectorAll(".btn-tip");
const customTip = document.querySelector(".btn-special");
const tipResult = document.querySelector(".tip-result");
const totalResult = document.querySelector(".total-result");
const resetButton = document.querySelector(".btn-reset");
let tipPercentage;

// Calculate Tip
function handleTip(e) {
    if (!e.target.classList.contains("active")) {
        e.target.classList.add("active");
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
        }
    }

    tipPercentage = e.target.value;
    tipPercentage = parseFloat(tipPercentage / 100).toFixed(2);
    calculateBill();
}

// Calculate total bill amount plus tip
function calculateBill() {
    let total;
    let tipTotal;
    let fullAmount;

    if (billInput.value > 0 && peopleInput.value > 0) {
        total = billInput.value / peopleInput.value;
        tipTotal = tipPercentage * total;
        fullAmount = total + tipTotal;

        if (tipTotal > 0 && fullAmount > 0) {
            tipResult.innerHTML = "$ " + parseFloat(tipTotal).toFixed(2);
            totalResult.innerHTML = "$ " + parseFloat(fullAmount).toFixed(2);
        }
    }
}

// Reset
function resetBill() {
    billInput.value = "";
    peopleInput.value = "";
    customTip.value = "";
    tipResult.innerHTML = "$ " + parseFloat(0.0).toFixed(2);
    totalResult.innerHTML = "$ " + parseFloat(0.0).toFixed(2);
}

// Event Listeners

tipButton.forEach((tip) => {
    tip.addEventListener("click", handleTip);
});

billInput.addEventListener("input", calculateBill);
peopleInput.addEventListener("input", calculateBill);
customTip.addEventListener("input", handleTip);
resetButton.addEventListener("click", resetBill);
