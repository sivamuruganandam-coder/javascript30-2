console.log("JS FILE LOADED");


let hourHand = document.getElementById('hour-hand');
let minuteHand = document.getElementById('minute-hand');
let secondHand = document.getElementById('second-hand');
let sound = document.getElementById('audio');



setInterval(function () {
    sound.play();
    let time = new Date();
    // HOUR HAND
    let hour = time.getHours();
    let hourDeg = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    // MINUTE HAND
    let minute = time.getMinutes();
    let minuteDeg = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    // SECOND HAND
    let second = time.getSeconds();
    let secondDeg = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    // DIGITAL CLOCK
    const ctime = document.getElementById('time');
    let clock = time.toLocaleTimeString();
    ctime.innerText = clock;
    sound.currentTime = 0;
   


}, 1000);