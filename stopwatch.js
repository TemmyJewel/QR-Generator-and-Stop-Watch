
// Stopwatch
const displaytime = document.getElementById("displaytime");
const watchStart = document.getElementById("start");
const watchReset = document.getElementById("reset");
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    
    displaytime.innerHTML = 
    String(hours).padStart(2, "0") + ":" +
  String(minutes).padStart(2, "0") + ":" +
  String(seconds).padStart(2, "0");
}

watchStart.addEventListener("click", ()=>{
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
})

watchReset.addEventListener("click", ()=>{
        clearInterval(timer);
})