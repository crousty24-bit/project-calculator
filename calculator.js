// 5. link HTML digits buttons & Event 'click' :
const userDigit = document.getElementById("digits");
const display = document.getElementById("calculator");
const userOperator = document.getElementById("operators");
const userEqual = document.getElementById("equal");
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
        highlight(target);// will mark which digit is clicked
    }
});
// 6. link HTML operators & Event 'click' :
userOperator.addEventListener("click", (event) => {
    num1 = currentNum; //6.1 store in num1
    let target = event.target;
    if (target.tagName === 'BUTTON') {
        operator = target.textContent;
        currentNum = "";//6.2 reset to get num2 later
    }
})
// 6.4 linkHTML id"equal" & Event 'click' :
userEqual.addEventListener("click", (event) => {
    num2 = currentNum;// new currentNum become num2
    if (num1 && num2 && operator) {// verify if var exists
        // 6.5 call func and convert :
        let result = operate(Number(num1), Number(num2), operator);
        display.textContent = result;
        currentNum = result;// result become new currentNum for next calc
    } 
})

// 1. operators functions :
const add = (a, b) => a + b ;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

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