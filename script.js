const billInput = document.querySelector(".bill");
let tipInput = document.querySelector(".tip");
const errorMsg = document.querySelector(".msg");
const fair = document.querySelector(".fair");
const good = document.querySelector(".good");
const excellent = document.querySelector(".excellent");
const calculateBtn = document.querySelector(".calculate");
const resetBtn = document.querySelector(".reset");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");

calculateBtn.addEventListener("click", calculateTip);
resetBtn.addEventListener("click", resetAll);
fair.addEventListener("click", fairValue);
good.addEventListener("click", goodValue);
excellent.addEventListener("click", excellentValue);

function fairValue() {
  tipInput.value = 0.1;
  fair.classList.add("myxc");
  document.querySelector(".fp").classList.add("mypc");
  good.classList.remove("myxc");
  document.querySelector(".gp").classList.remove("mypc");
  excellent.classList.remove("myxc");
  document.querySelector(".ep").classList.remove("mypc");
}
function goodValue() {
  tipInput.value = 0.15;
  good.classList.add("myxc");
  document.querySelector(".gp").classList.add("mypc");
  fair.classList.remove("myxc");
  document.querySelector(".fp").classList.remove("mypc");
  excellent.classList.remove("myxc");
  document.querySelector(".ep").classList.remove("mypc");
}
function excellentValue() {
  tipInput.value = 0.2;
  excellent.classList.add("myxc");
  document.querySelector(".ep").classList.add("mypc");
  fair.classList.remove("myxc");
  document.querySelector(".fp").classList.remove("mypc");
  good.classList.remove("myxc");
  document.querySelector(".gp").classList.remove("mypc");
}

function hideError() {
  setTimeout(() => {
    errorMsg.style.display = "none";
  }, 3000);
}

function calculateTip(e) {
  e.preventDefault();
  if (billInput.value == "" || billInput.value == "") {
    errorMsg.style.display = "block";
    hideError();
  } else if (isNaN(billInput.value)) {
    errorMsg.innerHTML = "Please enter number only";
    errorMsg.style.display = "block";
    hideError();
  } else {
    let tip = Number(tipInput.value) * Number(billInput.value);
    tip = Math.ceil(tip);
    let totalBill = Number(billInput.value) + tip;

    tipAmount.innerHTML = `Tip Amount: &#160; $${tip}`;
    totalAmount.innerHTML = `Total Bill: &#160; $${totalBill}`;
    document.querySelector(".thank-you").style.display = "block";
    hideThankYou();
  }
}

function hideThankYou() {
  setTimeout(() => {
    document.querySelector(".thank-you").style.display = "none";
  }, 5000);
}

function resetAll() {
  tipInput.value = "";
  billInput.value = "";
  fair.classList.remove("myxc");
  document.querySelector(".fp").classList.remove("mypc");
  good.classList.remove("myxc");
  document.querySelector(".gp").classList.remove("mypc");
  excellent.classList.remove("myxc");
  document.querySelector(".ep").classList.remove("mypc");
  tipAmount.innerHTML = ` Tip Amount:&#160; &#160;<span>$0</span>`;
  totalAmount.innerHTML = `Total Bill:&#160; &#160;<span>$0</span>`;
}
