let firstNumber = '';
let secondNumber = '';
let operator = '';
let resetSwitich = false
let mathFormula = [];


//button selectors
const clear = document.querySelector('#clearBtn');
clear.addEventListener('click', () =>{clearAll()});

const delBtn = document.querySelector('#deleteBtn');
delBtn.addEventListener('click', () => {deleteNumber()});

const equal = document.querySelector('#equalBtn');
equal.addEventListener('click', () => {calculate()});

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
        resetSwitich = false
    }
    // Keep numbers to 10 digits
    if (display.textContent.length < 10){
    //Ensure that you don't add another '0' on top of the '0'
    if(display.textContent === '0'){
        deleteNumber()
    }
    //adds a '0' after the '.'
    if (num === '.'){
        if (display.textContent.includes('.')) return;
        if (display.textContent.length <= 0){
            display.textContent = '0'
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

function numberStorage (oper){
    if (firstNumber === ''){
        firstNumber = display.textContent;
        operator = oper;
        resetSwitich = true
    } else if (secondNumber === ''){
        secondNumber = display.textContent;
        resetSwitich = true
        calculate();
    }
}


// Basic arithmetic operation
function calculate (firstNumber, secondNumber){
    if (operator = '+'){
        answer = firstNumber + secondNumber;
        display.textContent = answer;
    } else if (operator = '-'){
        return firstNumber - secondNumber;
    } else if (operator = 'x'){
        return firstNumber * secondNumber;
    }else if (operator = '/'){
        return firstNumber / secondNumber;
    }else console.log('operate error');
}
