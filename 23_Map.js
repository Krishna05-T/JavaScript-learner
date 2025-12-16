// Map 
/*
    map returns a new array after modifying every element of the original array
*/

let myArr = [1,2,3,4,5,6,7,8,9,10];

let myNum = myArr.map( (element) => (element+1))
console.log(myNum)

// mutliply map and conditions

myNum = myArr
        .map( (item) => item *10)
        .map( (item) => (item+1))
        .filter((item) => (item >= 40))
console.log(myNum);
