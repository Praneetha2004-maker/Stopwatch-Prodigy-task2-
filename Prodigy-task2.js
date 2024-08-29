let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}.${formattedMS}`;
}

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton("STOP");
}

function stop() {
    clearInterval(timerInterval);
    showButton("START");
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00.00");
    elapsedTime = 0;
    showButton("START");
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    let lapTime = timeToString(elapsedTime);
    let lapElement = document.createElement("div");
    lapElement.innerText = lapTime;
    document.getElementById("laps").appendChild(lapElement);
}

function showButton(buttonKey) {
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");

    if (buttonKey === "START") {
        startButton.style.display = "inline-block";
        stopButton.style.display = "none";
    } else {
        startButton.style.display = "none";
        stopButton.style.display = "inline-block";
    }
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);

showButton("START");