let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

let sum = document.getElementById('sum-el');

// ------------

function add() {
  let adding = num1 + num2;
  sum.textContent = 'Result: ' + adding;
}

function subtract() {
  let subtracting = num1 - num2;
  sum.textContent = 'Result: ' + subtracting;
}

function divide() {
  let dividing = num1 / num2;
  sum.textContent = 'Result: ' + dividing;
}

function multiply() {
  let multipling = num1 * num2;
  sum.textContent = 'Result: ' + multipling;
}
