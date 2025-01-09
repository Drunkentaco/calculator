const add = function (num1, oper, num2){
    return num1 + num2;
}

const subtract = function (num1, oper, num2){
    return num1 - num2;
}

const multiply = function (num1, oper, num2){
    return num1 * num2;
}

const divide = function (num1, oper, num2){
    return num1 / num2;
}

const operate = function (num1, oper, num2){
    if (oper = '+'){
        return add();
    } else if (oper = '-'){
        return subtract();
    } else if (oper = '*'){
        return multiply();
    }else if (oper = '/'){
        return divide();
    } else console.log('error');
}

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('#display');

let i = 0

numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
        //Keep the number within 10 digit
        while (i < 10){
            const digit = document.createElement('div');
            digit.classList.add('digit');
            display.appendChild(digit);
            i++
    
            let numSelection = event.target.name
            digit.textContent = `${numSelection}`
            
            if (numSelection === ".") {
                document.getElementById('dot').disabled='true'
            }
            break
        }
    })
});
