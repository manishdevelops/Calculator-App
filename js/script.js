'use strict'

const switchOpts=document.querySelectorAll('.btnOptions');
const toggleSwitchBtn=document.querySelector('.toggleBtn');


const totalSwitches=switchOpts.length;
let currSwitch=1;

const goToBtn=function(val){
  toggleSwitchBtn.style.transform=`translateX(${18*val}px)`;
}

switchOpts.forEach(function(ele){
  ele.addEventListener('click',function(e){
    if (e.target.classList.contains('btnOptions')){
      const TargetBtn=+ e.target.dataset.index;
      console.log(typeof TargetBtn);
      goToBtn(TargetBtn);
      currSwitch=TargetBtn;
    }
    return;
  });

});





