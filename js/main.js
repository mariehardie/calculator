//toggler

const togglerBtn = document.querySelector('.toggler');
const calculatorBtn = document.querySelector('.calculator');
const togglerIcon = document.querySelector('.toggler-icon');

let isDark = true;
togglerBtn.onclick = () => {
  calculatorBtn.classList.toggle('dark');
  togglerBtn.classList.toggle('active');
  isDark = !isDark;
}

//calculator

const displayScr = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
let expression = '';


function updateDisplay(value) {
displayScr.innerText = value;
}

function clear() {
  updateDisplay('0');
  expression = '';
}

clear();


// events for all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const className = button.classList;
    const id = button.id;
    if (id === ')') {
      expression += id;
      updateDisplay(expression);
    } else if (id === '(') {
      expression += id;
      updateDisplay(expression);
    } 
  else if (className.contains('btn-number')) {
    expression += id;
    updateDisplay(expression);
  } else if (className.contains('btn-operator')) {
    if (expression !== '') {
      expression += ' ' + id + ' ';
      updateDisplay(expression) 
    }
  } else if (className.contains('btn-equal')) {
    calculate(expression);
  } else if (className.contains('btn-clears')) {
    clear();
  } else if (className.contains('btn-backspace')) {
    expression = expression.slice(0,-1);
    updateDisplay(expression);
    if (expression === '') {
      clear();
    }
  } else if (id === '.') {
    if (!expression.endsWith('.')) {
      expression += id;
      updateDisplay(expression);
    }
  } else if (id === ')') {
    expression += id;
    updateDisplay(expression);
  } else if (id === '(') {
    expression += id;
    updateDisplay(expression);
  } 
  })
})

//math expression function

function evaluateExpression(expression) {
  const tokens = expression.split(/\s+/);
  
  let result = Number(tokens[0]); //first number

  for (let i = 1; i < tokens.length; i+=2) {
    const operator = tokens[i];
    const operand = Number(tokens[i+1]);
    if (operator === '+') {
      result += operand;
    } else if (operator === '-') {
      result -= operand;
    } else if (operator === '*') {
      result *= operand;
    } else if (operator === '/') {
      result /= operand;
    }
  }
  return result;
}

//performing a math operation

function calculate(expression) {
  let res;
  
  try {
    res = evaluateExpression(expression);
  }
  catch(error) {
    res = 'Mistake!'
  }
  expression = String(res)
  updateDisplay(expression);  
}






