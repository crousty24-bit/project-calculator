const userDigit = document.getElementById("digits");
const display = document.getElementById("calculator");
const userOperator = document.getElementById("operators");
const userEqual = document.getElementById("equal");
const clear = document.getElementById("clear");
const undo = document.getElementById("undo");

// 6.3 placed var to be accessed in global scope
let currentNum = "";
let num1 = "";
let num2 = "";
let operator = "";
let justCalculated = false;

// 5. link HTML digits buttons & Event 'click' :
userDigit.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName !== 'BUTTON') return;
    // 8.1 button press effect :
    target.classList.add('active');
    setTimeout(() => target.classList.remove('active'), 100);
    // 7.5 handle digits after a result w/ reset:
    if (justCalculated === true) {
        currentNum = "";
        num1 = "";
        operator = "";
        justCalculated = false;
    }
    const digit = target.textContent;
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
            currentNum = `${currentNum}${digit}`; //standard concat
        }  
        display.textContent = currentNum;
        /*highlight(target);*/
});
// 6. link HTML operators & Event 'click' :
userOperator.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName !== "BUTTON") return;// 7.3.1 secure if click on container != button
    
    target.classList.add('active');
    setTimeout(() => target.classList.remove('active'), 100);
    // 7.6 bug fix when operator takes ancient currentNum
    if (justCalculated === true) {
        num1 = currentNum;
        currentNum = "";
        operator = target.textContent;
        justCalculated = false;
        return
    }
    // 7.3 second operator triggers operate result :
    if (num1 && currentNum && operator) {
        const result = operate(Number(num1), Number(currentNum), operator);
        const rounded = Math.round(result * 100) / 100;
        display.textContent = rounded;
        num1 = rounded;
        currentNum = "";
         if (target.tagName === 'BUTTON') {
            operator = target.textContent;
        } return
    } else {
        if (!currentNum) return; // 7.3.2 secure if clicked operator w/o num
        num1 = currentNum; //6.1 store in num1
         if (target.tagName === 'BUTTON') {
            operator = target.textContent;
        }
        currentNum = "";//6.2 reset to get num2 later
    }
})
// 6.4 linkHTML id"equal" & Event 'click' :
userEqual.addEventListener("click", (event) => {
    // 7.4 click equal should not calc anything
    if (justCalculated === true) {
        return
    }
    // 7.4.1 secure we do have every elements :
    if (!num1 || !currentNum || !operator) {
        return
    }
    num2 = currentNum;
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
    if (num1 && num2 && operator) {
        // 6.5 call func and convert :
        const result = operate(Number(num1), Number(num2), operator);
        // 7.7 roundup result to 2 decimals (same in operator listener) : 
        const rounded = Math.round(result * 100) / 100;
        display.textContent = rounded;
        currentNum = rounded;// rounded become new currentNum for next calc
        num1 = "";
        num2 = "";
        operator = "";
        justCalculated = true;
    } 
})
// 6.6 link HTML id"clear" & Event 'click' : 
clear.addEventListener("click", (event) => {
    currentNum = "";
    num1 = "";
    num2 = "";
    operator = "";
    justCalculated = false;
    display.textContent = "";
})
// 7.2 link HTML id"undo" & Event 'click' : 
undo.addEventListener("click", (event) => {
    if (currentNum !== "") {
        currentNum = currentNum.slice(0, -1);
        display.textContent = currentNum;
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