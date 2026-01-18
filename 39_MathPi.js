console.log(Math.PI)
Math.PI = 5;
console.log(Math.PI)
// why PI value is not change because it writeable property is set to false.

//In JavaScript, every object property has hidden settings called property descriptors.
// These control whether a property can be changed, seen, or deleted.

const  descipter = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log((descipter))


const chai = {
    name: 'masala chai',
    price: 300,
    isAvailable: true,

    orderChai: function() {
        console.log('chai ban rahi hai');
    }
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// now here anyone can change the property because all property of descriptor is ture how to change 

Object.defineProperty(chai, 'name', {
    writable: false, 
    enumerable: false,
    configurable: false
}) 

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
// no change is possible
// chai.name = "Ginger chai";
// console.log(chai.name)


//Visibility is controlled using the enumerable property.


// Object is iterable convert into array
for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

// name is not visible because enumerable property is false on it

