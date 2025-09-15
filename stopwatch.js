
// Stopwatch
const displaytime = document.getElementById("displaytime");
const watchStart = document.getElementById("start");
const watchReset = document.getElementById("reset");
const watchStop = document.getElementById("stop");
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
    timer = setInterval(stopwatch, 1000);
})

watchReset.addEventListener("click", ()=>{
        clearInterval(timer);
        [seconds, minutes, hours] = [0, 0, 0];
        displaytime.innerHTML = "00:00:00"
})

watchStop.addEventListener("click", ()=>{
        clearInterval(timer);

})