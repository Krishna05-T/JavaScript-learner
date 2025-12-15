function greeting() {
    console.log("hello Krishna")
}
greeting();

// parameter 

function greeting1(name)  {
    console.log(`Welcome ${name}`);
}
greeting("Krishna")

// function sum(num1 , num2) {
//     console.log(num1+num2);
// }
// sum(5,5);

// return keyword

function sum(num1, num2){
    return num1+num2;
}
console.log(sum(5, 5));

// function loginMessage(userName) {
//     return(`${userName} just logged in`)
// }

// console.log(loginMessage("Krishna"));

function loginMessage(userName) {
    if(!userName){                  // user name is undefined and undefined is false
        console.log("Please enter username");
        return
    }
    return (`${userName} just logged in`)
}
console.log(loginMessage());

        // also use default name 

function loginMessage1(userName = "Sam") {
    return(`${userName} just logged in`)
}

console.log(loginMessage1());
console.log(loginMessage1("Krishna"));


///++++++++++++++++ Rest Operator

function calculatePrice(val1, ...num){
    console.log(num);
}

calculatePrice(20, 100, 200, 500, 1000)

// +++++++++++++++++++++++++++++++++++++++ Object pased in Function

const user = {
    name: "Krishna",
    id: 123
}

function handleObject(anyObject) {
    console.log(`Name of user : ${anyObject.name} and id : ${anyObject.id}`)
}
handleObject(user)

// direct passed object

function handleObject1(user1 = {
    name: "Aayush",
    id : 122
}){
     console.log(`Name of user : ${anyObject.name} and id : ${anyObject.id}`)
}

//++++++++++++++++++++++++++ Array Passed in Function

const arr = [2,3,4,5,6];
function takearr(array) {
        return array[0]
}
console.log(takearr(arr));


