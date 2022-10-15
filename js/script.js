'use strict'

const switchOpts=document.querySelectorAll('.btnOptions');

switchOpts.forEach(function(ele){
  ele.addEventListener('click',function(e){
    console.log(1);
    if (e.target.classList.contains('btnOptions')){
      const TargetBtn=e.target.dataset.index;
      console.log(TargetBtn);
      // const dataSet=
    }
    return;
  })

})

console.log(switchOpts);



