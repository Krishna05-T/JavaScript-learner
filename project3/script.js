const time = document.getElementById('time')
//setInterval() runs a function repeatedly after a fixed time interval.
setInterval(function(){
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();
}, 1000)