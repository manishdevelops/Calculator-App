'use strict'

const switchOpts=document.querySelectorAll('.btnOptions');
const toggleSwitchBtn=document.querySelector('.toggleBtn');
const totalSwitches=switchOpts.length;
let currSwitch=1;

const goToBtn=function(val){
  console.log(currSwitch);
  toggleSwitchBtn.style.transform=`translateX(${18*val}px)`;

}

switchOpts.forEach(function(ele){
  ele.addEventListener('click',function(e){
    // console.log(1);
    if (e.target.classList.contains('btnOptions')){
      const TargetBtn=e.target.dataset.index;
      console.log("target",TargetBtn);
      goToBtn(TargetBtn);
      currSwitch=TargetBtn;
    }
    return;
  });

});

console.log(switchOpts);



