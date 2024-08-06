const calculationDisplay = document.querySelector('.calculation')
const numbersButtons = document.querySelectorAll('button.number')
const operators = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals')
const clearBtn = document.querySelector('.clear')

let numbers = []
let operator = ''
let result = 0
let opSelected = false

// calculationDisplay.textContent = 5

numbersButtons.forEach(num => {
  num.addEventListener('click', () => {
    if(!opSelected) {
      calculationDisplay.innerHTML += num.textContent
    }
    else {
      calculationDisplay.innerHTML = num.textContent
      opSelected = false
    }
  })
})

operators.forEach(op => {
  op.addEventListener('click', () => {
    numbers.push(calculationDisplay.textContent)
    operator = op.textContent
    calculationDisplay.innerHTML = op.textContent
    opSelected = true
  })
})

clearBtn.addEventListener('click', () => {
  calculationDisplay.innerHTML = ""
  numbers = []
})

equalsBtn.addEventListener('click', () => {
  opSelected = false
  numbers.push(+calculationDisplay.textContent)
  calculate(numbers, operator)
  numbers = []
  // console.log(numbers, operator);
})

function calculate(numbers, op) {
  if(numbers == [] || numbers.length === 1 || isNaN(numbers[0]) || isNaN(numbers[1])) {
    numbers = []
    alert('Incorrect Input')
    calculationDisplay.innerHTML = ""
  }
  // Calculate
  else {
    if(op === "+"){
      calculationDisplay.textContent = +numbers[0] + +numbers[1]
    }
    if(op === "-"){
      calculationDisplay.textContent = +numbers[0] - +numbers[1]
    }
    if(op === "/"){
      calculationDisplay.textContent = +numbers[0] / +numbers[1]
    }
    if(op === "*"){
      calculationDisplay.textContent = +numbers[0] * +numbers[1]
    }
    if(op === "%"){
      calculationDisplay.textContent = +numbers[0] % +numbers[1]
    }
  }
}