function secondsConverter(seconds){
    var hours = Math.floor(seconds / 60 / 60);
    var minutes = Math.floor(seconds / 60) - (hours * 60);
    var seconds = seconds % 60;
    var formatted = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
      ].join(':');

    return(formatted)
}

document.querySelector("#buttonStart").onclick = function () {
    var seconds = document.getElementById("inputSeconds").value;
    if (seconds.replace(/\s/g, '').length === 0 || isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid number");
    }
    else {
        let timerInterval = setInterval(() => {
            var timer = document.getElementById("timer");
            seconds --;
            timer.textContent = secondsConverter(seconds);
            if (seconds === 0) {
                clearInterval(timerInterval);
                alert("Countdown is over");
            } 
        }
            , 1000);
    }
}