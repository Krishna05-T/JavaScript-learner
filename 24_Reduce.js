// Reduce

/*
        reduce() reduces an array to one value using an accumulator fuction || reduec() combibes all element of an array into a single value
*/

let myArr = [1,2,3,4];

let mytotal = myArr.reduce( function(acc, currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
       
    return acc + currval;
},0)        // initialized value of acc

console.log(mytotal)

// By arrow fuction

mytotal = myArr.reduce( (acc, currval) => (acc+currval),0)

console.log(mytotal)


// on Object 


let shoppingCart = [
    {
        itemName: "Oil",
        price: 122
    },
    {
        itemName: "Floor",
        price: 50
    },
    {
        itemName: "Rice",
        price: 70
    },
    {
        itemName: "Prefume",
        price: 190
    },
]

let totalBill = shoppingCart.reduce( (acc, Cart) => (acc + Cart.price),0);

console.log(totalBill);
