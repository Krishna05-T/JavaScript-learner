// var c =300
let a = 200
if(true) {
    let a = 10       //error
    const b = 20     //error
    var c = 30
    console.log("Inside ",a);
}

console.log(a);
// console.log(b);
// console.log(c);         //what why var is not use


// basic clozer

function one(){
    let userName = "Krishna"
    function two(){
        let website = "Youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
one()

// declare function


console.log(truee(2));                  //It work 

function truee(num){
    return num +1;
}


// console.log(motivation(2));             this type of declaration give error because before intilization

const motivation = function(numm) {
    return numm +2;
}
console.log(motivation(2));


