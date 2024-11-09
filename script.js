function addToDisplay(value) {
  const display = document.getElementById('result');
  if (display.innerText === '0' && value !== '.') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  document.getElementById('result').innerText = '0';
}

function invertSign() {
  const display = document.getElementById('result');
  display.innerText = String(parseFloat(display.innerText) * -1);
}

function calculate() {
  const display = document.getElementById('result');
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = 'Error';
  }
}
