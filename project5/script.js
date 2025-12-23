// Ramdom color genrate

const randomColor = function() {
    const hex = '012345789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(randomColor())


// let body = function(){
//         document.querySelector('body').style.backgroundColor = randomColor();
//     }

// document.querySelector('#start').addEventListener('click', function() {
//     let stop = setInterval(body,1000);

//     document.querySelector('#stop').addEventListener('click', function(){
//         clearInterval(stop);
//         console.log('STOPPED')
//     })
// })

let interval;
let startCol = function() {
    let body = function() {
        document.body.style.backgroundColor = randomColor();
    }
    if(!interval) {
        interval = setInterval(body, 1000);
    }
}
let stopCol = function() {
    clearInterval(interval);
    interval = null
}

document.querySelector('#start').addEventListener('click', startCol);
document.querySelector('#stop').addEventListener('click', stopCol);
