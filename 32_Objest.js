// Array is object 
// String is object
// fuction is also object
// Array, String, fuction all are inherite object but object not inherite anyone it have own properties 

//When JavaScript cannot find a property or method on an object, it looks up the prototype chain.

// This lookup continues:
// Object → Prototype → Parent Prototype → Object.prototype → null

function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 4;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);     // this line give {} because in javaScript fuction automaticallu has a prototype object

function product(item, price) {
    this.item = item;
    this.price = price
}

// Injecting Methods via Prototype
product.prototype.inrement = function() {
    this.price++;
}
product.prototype.printMe = function() {
    console.log(`price is ${this.price}`)
}

// Because this points to the object (tea) that already has price, the prototype functions can use this.price even though price is not inside them.

const tea = new product("GreenTea", 30); // without new it not working

/*
    What new does internally:

Creates a new empty object {}

Links it to Constructor.prototype

Binds this to the new object

Returns the new object
*/
const coffe = product("HotCoffe", 100);

tea.printMe();