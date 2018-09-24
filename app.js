let hour = 0;
let min = 0;
let sec = 0;
let miliSec = 0;
let counter;

function callTimer() {
    miliSec++;
    if (miliSec <= 100) {
        if (miliSec === 100) {
            miliSec = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
                if (min === 60) {
                    min = 0;
                    hour++;
                }
            }
        }
    }
    document.querySelector("#timer").innerHTML = hour + " : " + min + " : " + sec + " : " + miliSec;
}


function start() {
    if (swatch.startbtn.value === "START") {
        counter = setInterval(callTimer, 10);
        swatch.startbtn.value = "STOP";
    } else {
        clearInterval(counter);
        swatch.startbtn.value = "START";
    }
}

function rst() {
    clearInterval(counter);
    swatch.startbtn.value = "START";
    hour = 0;
    min = 0;
    sec = 0;
    miliSec = 0;
    document.querySelector("#timer").innerHTML = hour + " : " + min + " : " + sec + " : " + miliSec;
}