const form = document.querySelector('form')

form.addEventListener('submit', function (eve) {
    eve.preventDefault()  // stop the browser's default behavior of an event
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector('#result')
    const message = document.querySelector('#message')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter the valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter the valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1)
        result.innerHTML = `<span>${bmi}</span>`

        if(bmi < 18.6) {
           message.innerHTML = 'You are under weight ';
        } else if(bmi >= 18.6 && bmi <= 24.9){
            message.innerHTML = 'Yor are in normal range !!'

        }else{
            message.innerHTML = 'You are over weighted'
        }
        
    }
})