// 5. link HTML digits buttons & Event 'click' :
const userDigit = document.getElementById("digits");
const display = document.getElementById("calculator");
const userOperator = document.getElementById("operators");
const userEqual = document.getElementById("equal");
const clear = document.getElementById("clear");
// 6.3 placed var to be accessed in global scope
let currentNum = "";
let num1 = "";
let num2 = "";
let operator = "";

userDigit.addEventListener("click", (event) => {
    let digit;
    let target = event.target;
    /*highlight(target);*/
    if (target.tagName === 'BUTTON') {
        digit = target.textContent;
        // 7.1 add decimals and button "." :
        if (digit === ".") {
            if (currentNum.includes(".")) {
            return }
            else if (currentNum) {
            currentNum = `${currentNum}.`;
            display.textContent = currentNum;
            }
            else if (currentNum === "") {
            currentNum = "0.";
            display.textContent = currentNum;
            return }
        } else {
            currentNum = `${currentNum}${digit}`;
            display.textContent = currentNum;
        }  
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
    // 7. handle divide by 0 :
    if (operator === "/" && num2 === "0") {
        alert('Error : Nice try');
        currentNum = "";
        num1 = "";
        num2 = "";
        operator = "";
        display.textContent = "";
        return
    }
    if (num1 && num2 && operator) {// verify if var exists
        // 6.5 call func and convert :
        let result = operate(Number(num1), Number(num2), operator);
        display.textContent = result;
        currentNum = result;// result become new currentNum for next calc
    } 
})
// 6.6 link HTML id"clear" & Event 'click' : 
clear.addEventListener("click", (event) => {
    currentNum = "";
    num1 = "";
    num2 = "";
    operator = "";
    display.textContent = "";
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