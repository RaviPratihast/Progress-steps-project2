'use strict';

const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const Prev = document.getElementById('btn-prev');
const Next = document.getElementById('btn-next');


let currActive = 1;


// Next button

Next.addEventListener('click', function () {
    // Next should go upto 4 only and halts there...and as it will always be on 1 , then the count will start at 2.

    currActive++;
    if (currActive > circles.length) {
        currActive = circles.length;
    }

    //   console.log(currActive);

    updateTheProgress();
});



//  prev button

Prev.addEventListener('click', function () {
    currActive--;

    if (currActive < 1) {
        currActive = 1;
    }

    updateTheProgress();
})



// actual work in the progress;

function updateTheProgress(e) {
    circles.forEach((circle, index) => {
        // console.log(`index:${index} and currActive:${currActive}`);

        if (index < currActive) {

            // though the index 1,2 3,4 that is it (forEach) has gone through each of the circle in just one click, now if condition will work for index less then 2.
            // console.log(`index:${index} and currActive:${currActive}`);
            circle.classList.add('circle-active');
        } else {
            circle.classList.remove('circle-active');
        }
    });

    const active=document.querySelectorAll('.circle-active');
    // console.log(`active:${active.length}`);
    // console.log(`circle length:${circles.length}`);
    // console.log((active.length-1)/(circles.length-1)*100);

    progress.style.width=`${(active.length-1)/(circles.length-1)*100}%`


    disableUnableBtn();




}


function disableUnableBtn(){
    if(currActive===1){
        Prev.disabled=true;
    }else if(currActive===circles.length){
        Next.disabled=true;
    }else{
        Prev.disabled=false;
        Next.disabled=false;

    }
}