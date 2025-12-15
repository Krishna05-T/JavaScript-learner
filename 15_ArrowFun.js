// +++++++++++++++++++++++++++++++++++++++++++++++ This 

const user = {
    name: "krishna",
    id: 1235,
    greet: function() {
       console.log(`Name of user : ${user.name} and id : ${user.id}`)
       console.log(this);
       
    }
}

user.greet()
user.name = "Sam"
user.greet()

console.log(this);          // but in browser output is


// Normal function

const fun1 = function(num1, num2) {   
    return num1 +num2 
}
console.log(fun1(5,7));


// Arrow function

const fun2 = (num1, num2) => {
    return num1 + num2
}
console.log(fun2(5,3));


// shoter way

const fun3 = (num1, num2) => (num1+num2)
console.log(fun3(4,4));


// object 

const obj = () => ({username: "Krishna", id: 1237})
console.log(obj());



//++++++++++++++++++++++++++++++ Immediately Invoked Fuction Expression (IIFE) ++++++++++

(function () {
    console.log("Hello");       // unnamed arrow function
})();

(function greet(){
    console.log("hello");       // named arrow function
})();

(function greetPara(name){
    console.log(`Hello ${name}`);
    
})("Krishna")
