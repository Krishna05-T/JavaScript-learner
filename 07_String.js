const name = "Krishna";
let language = "Java";

// console.log(name + " learn " + language);           // not a good way to represent string

// use string interpolation 

// console.log(`Hello my name is ${name} and I know about ${language}`);   // this is the modern way to represent string by this we also use methods in it

// Object declare string

let anotherName = new String('KrishnaT');
// console.log(anotherName);
let name2 = "Jay Ram Shyam Rocky";
let useTrim = "     hello    "
console.log(anotherName.length);
console.log(anotherName[0]);
console.log(anotherName.toUpperCase());
console.log(anotherName.charAt(3));
console.log(anotherName.indexOf('s'));
console.log(anotherName.substring(0, 4));
console.log(anotherName.slice(-8, 4));
console.log(name2.split(' '));
console.log(name2.replace('Ram', 'Raghv'));
console.log(name2.includes('Jay'));
console.log(useTrim.trim());

// all methods of string are immutable it means it dont change the original string it create new string and return it

