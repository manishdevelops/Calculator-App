'use strict'

const switchOpts=document.querySelectorAll('.btnOptions');
const totalSwitches=switchOpts.length;
let currSwitch;

const slideBtn=function(val){
  let slideValue=0;
  if(totalSwitches > currSwitch)
    slideValue=val-totalSwitches;
  else
    slideValue=totalSwitches - val;
  console.log(slideValue);
}

switchOpts.forEach(function(ele){
  ele.addEventListener('click',function(e){
    console.log(1);
    if (e.target.classList.contains('btnOptions')){
      const TargetBtn=e.target.dataset.index;
      currSwitch=TargetBtn;
      console.log(TargetBtn);
      slideBtn(TargetBtn);
    }
    return;
  })

})

console.log(switchOpts);



