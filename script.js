const displayText = document.querySelector('.display-text');
const numButtons = document.querySelectorAll('.num')
const clear = document.querySelector('.clear')
const operatorButtons = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const backspace = document.querySelector('.backspace')

let operand = []
let opOne = 0;
let opTwo = 0;
let operator = '';

numButtons.forEach(button => {
    button.addEventListener('click',() => {
        if(displayText.textContent === '0') displayText.textContent = '';
        if(operand.includes('.') && button.textContent === '.') void(0);
        else {
            displayText.textContent += button.textContent;
            operand.push(button.textContent);
        }
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () =>{
        displayText.textContent += button.textContent;  
        if(operator === '' ){
            opOne = operand.join('');
            operand = [];
            operator = button.textContent;
        } 
        else if(operator != '' && operand.length === 0){
            operator = button.textContent;
        }
         else{
            // solve();

            opTwo = operand.join('');
            operand =[],
            result = operate(operator, Number(opOne), Number(opTwo))
            operator = button.textContent;
            displayText.textContent = `${result}${operator}`;
            opOne = result;
            opTwo = 0;
        }
    })
})

equals.addEventListener('click', () => {

    opTwo = operand.join('');
    operand =[],
    result = operate(operator, Number(opOne), Number(opTwo))
    // solve();
    displayText.textContent = result;
    opOne = result;
    opTwo = 0;
})

clear.addEventListener('click', () => location.reload())

function solve(){
    opTwo = operand.join('');
    operand =[],
    result = operate(operator, Number(opOne), Number(opTwo))
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 === 0){
        alert("Can't divide by zero.");
        location.reload();
    }else return num1 / num2;
}

function operate(operator, num1, num2){
    if(operator == '+') return add(num1, num2);
    if(operator === '-') return subtract(num1, num2);
    if(operator === 'X') return multiply(num1, num2);
    if(operator === '/') return divide(num1, num2);
}
