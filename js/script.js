'use strict'

const switchOpts=document.querySelectorAll('.btnOptions');
const totalSwitches=switchOpts.length;
let currSwitch=1;

const slideBtn=function(val){
  console.log(currSwitch);
  let slideValue=0;
  slideValue=val - currSwitch;
  console.log(slideValue);
}

switchOpts.forEach(function(ele){
  ele.addEventListener('click',function(e){
    // console.log(1);
    if (e.target.classList.contains('btnOptions')){
      const TargetBtn=e.target.dataset.index;
      console.log("target",TargetBtn);
      slideBtn(TargetBtn);
      currSwitch=TargetBtn;
    }
    return;
  })

})

console.log(switchOpts);



