let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// Add event listeners to the buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Timer variables
let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

// Start timer function
function startTimer() {
    timerInterval = setInterval(() => {
        milliseconds++;
        if (milliseconds >= 100) {
            seconds++;
            milliseconds = 0;
        }
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }
        updateTimerDisplay();
    }, 10);
}

// Stop timer function
function stopTimer() {
    clearInterval(timerInterval);
}

// Reset timer function
function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateTimerDisplay();
}

// Update timer display function
function updateTimerDisplay() {
    document.getElementById('hr').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('min').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('sec').innerHTML = seconds.toString().padStart(2, '0');
    document.getElementById('count').innerHTML = milliseconds.toString().padStart(2, '0');
}