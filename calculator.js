// 5.
const userNum = document.getElementById("digits");
console.log(userNum);
userNum.addEventListener("click", (event) => {
    console.log("click!");
    let digit;
    let target = event.target;
    if (target.tagName === 'BUTTON') {
        //highlight(target);
        digit = target.textContent;
        console.log(digit);
    }
    
});

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
console.log(operate(4, 2, '+'));
console.log(operate(4, 2, '-'));
console.log(operate(4, 2, '*'));
console.log(operate(4, 2, '/'));