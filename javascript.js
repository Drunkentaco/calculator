
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

const number = document.querySelector('.digit');
number.addEventListener('click', () => {
    const display = document.querySelector('#display');
    display.textContent = `${button}`
});