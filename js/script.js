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
  }

  clear() {

  }

  delete() {

  }

  appendNumber(number){

  }

  chooseOperation(operation) {
    
  }
}

const numsBtn = document.querySelectorAll('.numBtn');
const operatorBtn = document.querySelector('.operationBtn');
const equalsBtn = document.querySelectorAll('.equalesBtn');
const deleteBtn = document.querySelector('.delBtn');
const previousOperationText = document.querySelector('.previous-operand');
const currentOperationText = document.querySelector('.current-operand');





