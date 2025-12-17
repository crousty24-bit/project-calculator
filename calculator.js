// 5. link HTML digits buttons & Event 'click' :
const userDigit = document.getElementById("digits");
const display = document.getElementById("calculator");
const userOperator = document.getElementById("operators");
// 6.3 placed var to be accessed in global scope
let currentNum = "";
let num1 = "";
let num2 = "";
let operator = "";
userDigit.addEventListener("click", (event) => {
    let digit;
    let target = event.target;
    if (target.tagName === 'BUTTON') {
        digit = target.textContent;
        currentNum = `${currentNum}${digit}`; // 5.1 store digit & display into div calculator
        display.textContent = currentNum;
        highlight(target);
    }
});
// 6. link HTML operators & Event 'click' :
userOperator.addEventListener("click", (event) => {
    num1 = currentNum; //6.1 store in num1
    let target = event.target;
    if (target.tagName === 'BUTTON') {
        operator = target.textContent;
        //display.textContent = operator; dont want display
        highlight(target);
        currentNum = "";//6.2 reset to get num2 later
    }
})

// 1. operators functions :
const add = (a, b) => a + b ;
//console.log(add(2, 4))

const subtract = (a, b) => a - b;
//console.log(subtract(4, 2))

const multiply = (a, b) => a * b;
//console.log(multiply(2, 4))

const divide = (a, b) => a / b;
//console.log(divide(4, 2))

// 2. & 3. operate function :
const operate = (num1, num2, operator) => {
    if (operator === '+') {
        return add(num1, num2)
    } else if (operator === '-') {
        return subtract(num1, num2)
    } else if (operator === '*') {
        return multiply(num1, num2)
    } else if (operator === '/') {
        return divide(num1, num2)
    }
}
/*console.log(operate(4, 2, '+'));
console.log(operate(4, 2, '-'));
console.log(operate(4, 2, '*'));
console.log(operate(4, 2, '/'));*/