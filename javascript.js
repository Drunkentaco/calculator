// Starting Storages and Booleans to make the calculator works
let firstNumber = '';
let secondNumber = '';
let operator = '';
let resetSwitich = false;
let nextFirstNumber = false;
let numberCheck = false;
let signCheck = false;

//button selectors
const clear = document.querySelector('#clearBtn');
clear.addEventListener('click', () =>{clearAll()});

const delBtn = document.querySelector('#deleteBtn');
delBtn.addEventListener('click', () => {deleteNumber()});

const equal = document.querySelector('#equalBtn');
equal.addEventListener('click', () => {equalBtn()});

const numberBtn = document.querySelectorAll('.numberBtn');
numberBtn.forEach((button) => {
    button.addEventListener('click',() => {
        numberCheck = true;
        displayNumber(button.name);
    });
});
const operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach((button) =>{
    button.addEventListener('click',() =>{
        operatorCheck(button.name);
    })
})
const display = document.querySelector('#display');
display.textContent = 0;

function displayNumber(num) {
    //reset display after confirming firstNumber
    if (resetSwitich === true){
        resetDisplay();
        resetSwitich = false;
    }
    // Keep numbers to 10 digits
    if (display.textContent.length < 10){
    //Ensure that you don't add another '0' on top of the '0'
    if(display.textContent === '0'){
        deleteNumber();
    }
    //adds a '0' after the '.'
    if (num === '.'){
        if (display.textContent.includes('.')) return;
        if (display.textContent.length <= 0){
            display.textContent = '0';
        }
    }
    display.textContent += num;
   }
}

function resetDisplay(){
    display.textContent = '0';
}

function deleteNumber (){
    num = display.textContent;
    display.textContent = num.slice(0,-1);
}

function clearAll(){
    display.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    resetSwitich = false;
    nextFirstNumber = false;
    numberCheck = false;
    signCheck = false;
}

//checks if number was added before adding operators, and add bootlean to ensure equalBtn is active when it makes sense.
function operatorCheck(sign){
    if (numberCheck === false){
        return
    }
    numberCheck = false;
    signCheck = true;
    operator = sign;
    return numberStorage();
}

function numberStorage (){
    if (firstNumber === ''){
        resetSwitich = true;
        return firstNumber = display.textContent;
    //If equation has more than 1 operators, this will calculate the two numbers and use the answer as firstNumber
    }else (secondNumber === '')
        nextFirstNumber = true;
        return equalBtn();
}

function equalBtn(){
//checks if sign was added
    if (signCheck === false){
        return
    }
    secondNumber = display.textContent;
    resetSwitich = true;
    return calculate(firstNumber, operator, secondNumber);
}

function resetStorage(){
    firstNumber = '';
    secondNumber = '';
    if (nextFirstNumber === true){
        nextFirstNumber = false;
        firstNumber = display.textContent;
    }
}

// Basic arithmetic operation
function calculate (firstNumber, operator, secondNumber){
    if (operator === '+'){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        answer = num1 + num2;
        display.textContent = answer;
        return resetStorage();
    } else if (operator === '-'){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        answer = num1 - num2;
        display.textContent = answer
        return resetStorage();
    } else if (operator === 'x'){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        answer = num1 * num2;
        display.textContent = answer
        return resetStorage();
    }else (operator === '/')
        if (secondNumber === '0'){
            display.textContent = 'ERROR'
            return resetStorage();
        }
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        answer = num1 / num2;
        display.textContent = answer
        return resetStorage();
}
