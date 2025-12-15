

// // Example of a switch statement in JavaScript

// const { use } = require("react");

// // switch (key) {
// //     case value:
        
// //         break;

// //     default:
// //         break;
// // }


let day = 5;

switch(day) {
    case 0: 
        console.log("Sunday");
        break;
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thurday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    default:
        console.log("Not valid");
        break;
}


// // Falsy value

// // false, 0, -0, BigInt 0n, "", null, undefined, Nan

// // Truthy values

// // true, "0", 'false', " ", [], {}, function(){}

let  userEmail = "User@gmail.com"

if(userEmail) {
    console.log("Truthy value");
}else {
    console.log("Falsy value");
}

let emptyString = ""

if(emptyString) {
    console.log("Truthy value");
}else {
    console.log("Falsy value");
}

userEmail = []

if(userEmail.length === 0) {
    console.log("Array is empyt");
}

let empObj = {};

if(Object.keys(empObj).length === 0) {
    console.log("Object is empty");
    
}