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
    this.currentOperand = this.currentOperand.toString() + number.toString();
    // this.currentOperand = number;

  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
    this.currentOperationText.innerText = this.currentOperand;
  }
}


const numsBtn = document.querySelectorAll('.numBtn');
const operatorBtn = document.querySelector('.operationBtn');
const equalsBtn = document.querySelectorAll('.equalesBtn');
const deleteBtn = document.querySelector('.delBtn');
const previousOperationText = document.querySelector('.previous-operand');
const currentOperationText = document.querySelector('.current-operand');

const calculator = new Calculator(previousOperationText, currentOperationText);

numsBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    // console.log(1);
    calculator.updateDisplay();
    console.log(button.innerText);
  })
})



