'use strict';

const progress=document.getElementById('progress');
const circles=document.querySelectorAll('.circle');
const Prev=document.getElementById('btn-prev');
const Next=document.getElementById('btn-next');

// console.log(circles);
// circles.forEach((e)=> console.log(e))
let currActive=1;
// console.log(circles.length)

Next.addEventListener('click',function(){
    // Next should go upto 4 only and halts there...and as it will always be on 1 , then the count will start at 2.

    if(currActive<circles.length){
        currActive++;
    }
    // if(currActive===circles.length){
    //     currActive=1;
    // }
    console.log(currActive);
})