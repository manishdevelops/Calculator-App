'use strict'

const switchOpts=document.querySelectorAll('.btnOptions');
const toggleSwitchBtn=document.querySelector('.toggleBtn');
const bodyy = document.querySelector('body');

const totalSwitches=switchOpts.length;
let currSwitch=1;

const goToBtn=function(val){
  toggleSwitchBtn.style.transform=`translateX(${18*val}px)`;
}

switchOpts.forEach(function(ele){
  ele.addEventListener('click',function(e){
    if (e.target.classList.contains('btnOptions')){
      const TargetBtn=+ e.target.dataset.index;
      console.log(TargetBtn);
      bodyy.removeAttribute('class');
      bodyy.classList.add(`theme${TargetBtn}`);
      goToBtn(TargetBtn);
      currSwitch=TargetBtn;
    }
    return;
  });

});
//calculation

class Calculator {
  constructor(previousOperationText, currentOperationText){
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined ;
  }

  delete() {

  }

  appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
    // this.currentOperand = number;

  }

  chooseOperation(operation) {
    if(this.currentOperand === '') return;
    if(this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand ;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation){
      case '+':
        computation =prev + current;
        break;
      case '-':
        computation =prev - current;
        break;
      case 'x':
        computation =prev * current;
        break;
      case '/':
        computation =prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.currentOperationText.innerText = this.currentOperand;
    this.previousOperationText.innerText = this.previousOperand ;
  }
}


const numsBtn = document.querySelectorAll('.numBtn');
const operatorBtn = document.querySelectorAll('.operationBtn');
const equalsBtn = document.querySelector('.equalesBtn');
const deleteBtn = document.querySelector('.delBtn');
const previousOperationText = document.querySelector('.previous-operand');
const currentOperationText = document.querySelector('.current-operand');

const calculator = new Calculator(previousOperationText, currentOperationText);

numsBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
});

operatorBtn.forEach(button => {
  button.addEventListener('click', () => {
    console.log(1);
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
});

equalsBtn.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
})



