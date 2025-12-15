// Math is the default library in JS
console.log(Math);

console.log(Math.abs(-5)); // - => + 

console.log(Math.round(7.6));
console.log(Math.round(7.4));       // ceil => is give alway upper value : floor => it give lower value

console.log(Math.sqrt(25));  // square root

console.log(Math.pow(2,3)); // 2^3

console.log(Math.max(4,2,3,7,6));       // max find maximum number in array
console.log(Math.min(4,2,3,7,6));       // min find minimum number in array

console.log(Math.random());       // random find random number between 0 to 1

console.log((Math.random()*10)+1);  

console.log(Math.floor((Math.random() *10)) +1);

    // if the range is given to us to the formula is 

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min +1)) + min));
