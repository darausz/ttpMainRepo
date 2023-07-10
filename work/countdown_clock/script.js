const currentTime = document.getElementById("timer");
let timeRemaining = 5;

function countDown() {
    timeRemaining--;
    if (timeRemaining >= 0) {
        currentTime.innerHTML = timeRemaining;
    }
    else {
        currentTime.innerHTML = "time is up!";
    }
    console.log(timeRemaining);
}

setInterval(countDown, 1000);


