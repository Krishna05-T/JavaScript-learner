// delcare number variable
const score = 100;

// it is automatically detect number by JS
// delcare expilcitly which guarantee that it is number

const balanace = new Number(400);
console.log(balanace);

console.log(balanace.toString().length);
console.log(balanace.toFixed(2));

let num = 23.8966;
console.log(num.toPrecision(3));

num = 123.8966
console.log(num.toPrecision(3));

num = 1123.8966
console.log(num.toPrecision(3))

let price = 1000000;
console.log(price.toLocaleString());

Number.MAX_VALUE 