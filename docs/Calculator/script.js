const display = document.getElementById("display");
const result = document.getElementById("result");
const operators = ["+", "-", "*", "/", "."];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function appendValue(value) {
  const lastChar = display.value.slice(-1);

  if (operators.includes(lastChar) && operators.includes(value)) {
    return;
  }
  if ((value === ".") && (lastChar === ".")) {
    return;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    result.value = eval(display.value);
  } catch {
    result.value = "Error";
  }
}

document.addEventListener("keydown", function (e) {
  const key = e.key;

  if (!isNaN(key) || operators.includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});