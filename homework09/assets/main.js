const first = document.getElementById('firstOperand');
const second = document.getElementById('secondOperand');
const selector = document.getElementById('selector');
const button = document.getElementById('btn');
const display = document.getElementById('display');
const tempEl = document.getElementById('template').innerHTML;

button.addEventListener('click', getRes);

function getRes() {
    let result;
    let firstNum = Number(first.value);
    let secondNum = Number(second.value);
    checkFields()

    if(!firstNum || !secondNum) {
        return;
    };
    switch(selector.value) {
        case('sum'):
            result = sum(firstNum, secondNum);
            break;
        case('min'):
            result = min(firstNum, secondNum);
            break;
        case('mult'):
            result = mult(firstNum, secondNum);
            break;
        case('div'):
            result = div(firstNum, secondNum);
            break;
        default:
            result = '';
            break;
    };

    const newTempEl = document.createElement('li');
    newTempEl.innerHTML = `${result}`;
    display.append(newTempEl);
}

function sum(a, b) {
    return a + b;
}

function min(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function checkFields() {
    let firstNum = Number(first.value);
    let secondNum = Number(second.value);
    console.log(firstNum);
    if(!firstNum) {
        first.classList.add('red');
    }else {
        first.classList.remove('red');
    }

    if(!secondNum) {
        second.classList.add('red')
    }else {
        second.classList.remove('red');
    }
}