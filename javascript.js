
let firstNumber = '';
let secondNumber = '';
let operator = '';


//button selectors
const clear = document.querySelector('#clearBtn');
clear.addEventListener('click', () =>{
    clearAll()
});
const delBtn = document.querySelector('#deleteBtn');
delBtn.addEventListener('click', () => {
    deleteNumber()
});
const equal = document.querySelector('#equalBtn');
const numberBtn = document.querySelectorAll('.numberBtn');
numberBtn.forEach((button) => {
    button.addEventListener('click',() => {
        displayNumber(button.name)
    });
});
const operatorBtn = document.querySelectorAll('.operator');
    operatorBtn.forEach((button) =>{
        button.addEventListener('click',() =>{
            // Function?
        })
    })
const display = document.querySelector('#display');

display.textContent = 0
function displayNumber(num) {
   // Keep numbers to 10 digits
    if (display.textContent.length < 10){
    if(display.textContent === '0'){
        deleteNumber()
    }
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
    num = display.textContent
    display.textContent = num.slice(0,-1);
}

function clearAll(){
    display.textContent = '0'
}

/* let oper = operators.forEach((button) => {
    button.addEventListener('click', () => {
        const display = document.querySelector('#display');   
        if (firstNumber === ''){
            firstNumber = display;
            console.log(`${firstNumber}`)
        }
        else if (secondNumber === ''){
           console.log('2nd' `${display}`)
        }
    });
}); */


// Basic arithmetic operation
const operate = function (firstNumber, operator, secondNumber){
    if (oper = '+'){
        return firstNumber + secondNumber;
    } else if (operator = '-'){
        return firstNumber - secondNumber;
    } else if (operator = '*'){
        return firstNumber * secondNumber;
    }else if (operator = '/'){
        return firstNumber / secondNumber;
    }else console.log('operate error');
}


