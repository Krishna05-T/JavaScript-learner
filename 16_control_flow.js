const isUserLoggedIn = true;

if(isUserLoggedIn){
    console.log("Welcome back, user!");  
}

// operator in JS

//<, >, <=, >=, ==, ===, !=, !==

if (2 === "3") {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}


// scope 

let score = 100;

if(score > 50) {
    let power = "fly";
    console.log(`power is : ${power}`);
}

//console.log(`power is : ${power}`);     // error power is not defined

// short hand if 

let age = 18
if(age >= 18) console.log("You are eligible to vote");


// multiple conditions

const balace = 1200;

if(balace < 500) {
    console.log("less than 500");
} else if(balace < 750) {
    console.log("less than 750");
} else if(balace < 900) {
    console.log("less than 900");
}else {
    console.log("More than 1000`");
}


// multiple conditions 

let userLoggedIN = true
let debitcard = true;
let loggedInFromGoogel = true;
let loggedInFormEmail = false;

if(userLoggedIN && debitcard && 2==3) {
    console.log("Allow to buy course");
}

if(userLoggedIN || loggedInFormEmail){
    console.log("User logged in");
    
}

// ternary operator

let price = 100;

price > 80 ? console.log("More than 80"): console.log("Less than 80");

// nullish coalescing operator

// The ?? operator provides a default value when a variable is null or undefined.

let name = null;

name = name ?? "Krishan"
console.log(name);  // Output: Krishan

// Because name is null, "Krishna" is used.

let num;
num = num ?? 10 ?? 20
console.log(num);  // Output: 10


