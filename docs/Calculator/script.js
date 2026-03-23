const display = document.getElementById("display");
const result = document.getElementById("result");
const operators = ["+", "-", "*", "/", "."];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const errors = ["", "Error", "Undefined", "infinity"]

function appendValue(value) {
  const lastChar = display.value.slice(-1);

  if (operators.includes(lastChar) && operators.includes(value)) {
    return;
  }
  if (value === ".") {
    const parts = display.value.split(/[\+\-\*\/]/);
    const lastNumber = parts[parts.length - 1];

    if (lastNumber.includes(".")) {
      return;
    }
  }
  display.value += value;
  result.value = eval(display.value);
};

function clearDisplay() {
  display.value = "";
  result.value = "";
};

function calculate() {
  display.value = result.value;
  result.value = "";
};

function backspace() {
  display.value = display.value.slice(0, -1);
  if (display.value !== "") {
    result.value = eval(display.value);
  } else if (errors.includes(result.value)) {
    result.value = "";
  } else {
    result.value = "";
  }
};

document.addEventListener("keydown", function (e) {
  const key = e.key;

  if (!isNaN(key) || operators.includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});