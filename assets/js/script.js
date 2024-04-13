let display = document.querySelector("#display");

function insert(value) {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += value;
}
function clearDisplay() {
  display.value = "0";
}
function off() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function calculatePercentage() {
  display.value = eval(display.value) / 100;
}
