
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


//k