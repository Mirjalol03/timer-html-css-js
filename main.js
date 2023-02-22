let timeSpan = document.querySelector(".timeSpan");

let time_start = document.querySelector(".time_start");
let time_pause = document.querySelector(".time_pause");
let time_reset = document.querySelector(".time_reset");

let miniSec = 0,
sec = 0,
min = 0;


function toldir_zero(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }

function writeToSpan() {
    miniSec++;
    if(miniSec >= 100){
        miniSec = 0;
        sec++;
    }
    if(sec >= 60){
        sec = 0;
        min++;
    }
    let write = `${toldir_zero(min,2)}:${toldir_zero(sec,2)}:${toldir_zero(miniSec,2)}`;
    // console.log(write);
    timeSpan.textContent = write;

}

// setInterval(writeToSpan, 10) 

let refreshIntervalId;

time_start.addEventListener('click', () => {
    console.log("started");
    refreshIntervalId = setInterval(writeToSpan, 10) 
})


time_pause.addEventListener('click', () => {
    console.log("paused");
    clearInterval(refreshIntervalId);

    // let write = `${toldir_zero(min,2)}:${toldir_zero(sec,2)}:${toldir_zero(miniSec,2)}`;
    // timeSpan.textContent = write;
})

time_reset.addEventListener('click', () => {
    console.log("reseted");
    time_pause.click()
    miniSec = 0;
    sec = 0;
    min = 0;

    let write = `${toldir_zero(min,2)}:${toldir_zero(sec,2)}:${toldir_zero(miniSec,2)}`;
    timeSpan.textContent = write;
})