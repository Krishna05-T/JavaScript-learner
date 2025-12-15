// declare
let array = [0,1,2,3,4,5];
let _array = new Array(1,2,3,4,5);

// mixed array

let midArr = [2,3,"One","Two",false];

// access element index start with zero

console.log(array[0]);
console.log(_array[1]);
console.log(midArr[3]);


// operation on array

array.push(6)       //it add element in array at last
array.push(7)
console.log(array);

array.pop()
console.log(array);     //it remove element from array at last

_array.unshift(0)       //it add element in array at beginning
console.log(_array);

_array.shift()          //it remove element in array at beginning
console.log(_array);

console.log(_array.length);

console.log(_array.includes(4))
console.log(_array.includes(9))

console.log(_array.indexOf(4))
console.log(_array.indexOf(9))

let newArrOfString = array.join();      //it convert array into element into string
console.log(array);
console.log(newArrOfString);

// slice and splice

let myArr = [1,2,3,4,5];
console.log("A ", myArr);

let myA1 = myArr.slice(1,3);        // it copy element from array from index 1 to index 3 but index 3 is not included not remove from original array
console.log(myA1);
console.log("B ", myArr);

let myA2 = myArr.splice(1,3)        ;      // it remove element from array from index 1 to index 3 but index 3 is not included and return removed element form original array
console.log(myA2);
console.log("C ", myArr);


    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    console.log("\n\n\n")

    // Merge array

const boyName = ["Rohan", "Shyam", "Rahul", "Aayush"]
const girlName = ["Nikita", "Nehal", "Sima", "Ankita"]

boyName.push(girlName)
console.log(boyName);
console.log(boyName[4][2]);  // not a good way to merge it treat array as 4 element of boyName array

//contcat which merge two array in new array

const allName = boyName.concat(girlName)
console.log(allName);

//spread is better from all it take multiple array and merge it in new array

const _allName = [...boyName, ...girlName, ...array]
console.log(_allName);

// flat() remove the inside layer of array

const multiLayerArr = [1,2,3,[4,5],6,[7,8,[9,10]]];     // it is 3 inside layer array to remove layer use flat
const singleLayerArr = multiLayerArr.flat(Infinity)
console.log(singleLayerArr);

// array method

console.log(Array.isArray("Krishna"));      // it check the given value is array or not
console.log(Array.from("Krishna"));     // it convert iterable object into array
console.log(Array.from({name: "Krishna"}));     // it convert array like object into array but here it return empty array because object is not iterable


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));      // it create array from the given argument even if it is single value it create array of single element





