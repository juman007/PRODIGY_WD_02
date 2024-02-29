let milliseconds = 0,
    seconds = 0,
    minutes = 0;
let timer;
let lapCount = 1;

function start() {
    clearInterval(timer);
    timer = setInterval(updateTime, 10);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    lapCount = 1;
    document.getElementById("milliseconds").innerText = formatTime(milliseconds);
    document.getElementById("seconds").innerText = formatTime(seconds);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.querySelector(".laps").innerHTML = ""; // Clear laps list
}

function lap() {
    let lapTime = document.getElementById("minutes").innerText + ":" +
        document.getElementById("seconds").innerText + ":" +
        document.getElementById("milliseconds").innerText;

    let lapItem = document.createElement("li");
    lapItem.innerText = "Lap " + lapCount + ": " + lapTime;
    document.querySelector(".laps").appendChild(lapItem);

    lapCount++;
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    document.getElementById("milliseconds").innerText = formatTime(milliseconds);
    document.getElementById("seconds").innerText = formatTime(seconds);
    document.getElementById("minutes").innerText = formatTime(minutes);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
