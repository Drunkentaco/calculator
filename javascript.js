let firstNumber = '';
let secondNumber = '';
let operator = '';
let resetSwitich = false
let nextFirstNumber = '';


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
        displayNumber(button.name)
    });
});
const operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach((button) =>{
    button.addEventListener('click',() =>{
        numberStorage(button.name)
    })
})
const display = document.querySelector('#display');
display.textContent = 0

function displayNumber(num) {
    if (resetSwitich === true){
        clearAll();
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

function deleteNumber (){
    num = display.textContent;
    display.textContent = num.slice(0,-1);
}

function clearAll(){
    display.textContent = '0';
}

function numberStorage (sign){
    if (nextFirstNumber !== ''){
        firstNumber = nextFirstNumber;
        nextFirstNumber === '';
    }
    if (firstNumber === ''){
        operator = sign;
        resetSwitich = true;
        return firstNumber = display.textContent;
    } else if (secondNumber === ''){
        nextFirstNumber = calculate (firstNumber, operator, secondNumber)
        equalbtn();
    }
}

function equalBtn(){
    secondNumber = display.textContent;
    resetSwitich = true;
    calculate(firstNumber, operator, secondNumber);
}


// Basic arithmetic operation
function calculate (firstNumber, operator, secondNumber){
    if (operator === '+'){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        answer = num1 + num2;
        display.textContent = answer; 
    } else if (operator === '-'){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        console.log(operator)
        answer = num1 - num2;
        display.textContent = answer
    } else if (operator === 'x'){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        answer = num1 * num2;
        display.textContent = answer
    }else if (operator === '/'){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        answer = num1 * num2;
        display.textContent = answer
    }else console.log('operate error');
}
