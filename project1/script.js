const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// console.log(buttons) // here node list come of button

buttons.forEach(function (color) {
    // console.log(color)
    color.addEventListener('click', function(eve){
            console.log(eve);
            console.log(eve.target); // it tell where event come from
            let key = eve.target.id;
            switch (key) {
            case 'grey':
                body.style.backgroundColor = key
                break;
            case 'red':
                body.style.backgroundColor = key
                break;
            case 'blue':
                body.style.backgroundColor = key
                break;
            case 'yellow':
                body.style.backgroundColor = key
                break;
           }
    });
});