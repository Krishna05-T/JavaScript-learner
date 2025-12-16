// for of 
// for...of is a loop used to iterate over values of iterable objects.

// It directly gives values, not indexes.

// for...of is used to loop through values of arrays, strings, maps, and sets.
//[" "," "," "]
//[{}, {}, {}]

let arr = [1,2,3,4,5];

for(const numOfArr of arr) {
    console.log(numOfArr);
// it treat each element individual
}

let name = "krishna"
for(const char of name){
    console.log(char);
    
}


// maps 


const map = new Map();

map.set("IN", "India")
map.set("USA", "United State America")
map.set("FR", "France");

console.log(map);

for(const [key, value] of map){
    console.log(`${key} : ${value}`);
}



// Object in for...of


const myObj = {
    game1: "FreeFire",
    game2: "BGMI",
    game3: "Call of Duty",
    game4: "Candy Cursh",
    game5: "Hill Climber"
};



// for(const [key, value] of myObj){
//    console.log(`${key} : ${value}`);
// }

//  Object is not iterable so it give error when it use in for..of



// for...in loop

for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`);
}


// use for...in array
const arr1 = [1,2,3,4,5];

for (const key in arr1) {
   console.log(`${key} :- ${arr1[key]}`);
}


// use for...in in may

for(const key in map){
     console.log(`${key} :- ${arr1[key]}`);
}

// it not work in map


// Summary
// for...of is used to iterate over iterable objects like arrays, strings, maps, and sets.
// for...in is used to iterate over the enumerable properties of an object.


// for...each loop

const codingLang = ["C", "Cpp", "Java", "Python", "JavaScript"];

codingLang.forEach(function name(lang) {
    console.log(lang);
    
})


// by arrow function

codingLang.forEach((lang) =>{
    console.log(lang);
    
})

// we can also define a function and pass it to forEach

let printMe = function(item) {
    console.log(item);
    
}

codingLang.forEach(printMe)

// fetch object values in array by forEach

const languages = [
    {
        langName: "Java",
        langFileName: "java"
    },
    {
        langName: "JavaScript",
        langFileName: "js"
    },
    {
        langName: "Python",
        langFileName: "py"
    }
]

languages.forEach( (obj)=> {
    console.log(`Language name :${obj.langName}  :- File Extension :${obj.langFileName}`);
    
})

// what parameter come form array in for each loop

let array2 = ["C", "Java", "Python", "Cpp"];

array2.forEach((val, index, arrList) => {
    console.log(`${val}   ${index}   ${arrList}`);
    
})
