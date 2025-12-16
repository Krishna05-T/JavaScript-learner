// filter 

// filter creater a new array containing only the element that pass a condition || it return a new array with element that staisfy a given condition

// while for each is not return anything

let arr = [1,2,3,4,5,6,7,8,9,10]

let val= arr.forEach((values) =>{
    return values
})

console.log(val);       // undefined

val = val ?? arr.filter( (item) => (item > 4))
console.log(val);

// it also done by for each loop but in manual logic

let newArr = []
arr.forEach( (item) => {
    if(item > 4){
        newArr.push(item)
    }
})

console.log(newArr);


let books = [
    {
        title: "BookOne", genre:"Fiction", publish:1981, edition: 2004
    },
    {
        title: "BookTwo", genre:"Non-Fiction", publish:1992, edition: 2008
    },
    {
        title: "BookThree", genre:"=History", publish:1999, edition: 2007
    },
    {
        title: "BookFour", genre:"Non-Fiction", publish:2009, edition: 2014
    },
    {
        title: "BookFive", genre:"Science", publish:1981, edition: 2009
    },
    {
        title: "BookSix", genre:"Fiction", publish:1987, edition: 2010
    },
    {
        title: "BookSeven", genre:"History", publish:1986, edition: 1996
    },
    {
        title: "BookEight", genre:"Science", publish:1981, edition: 2010
    },
    {
        title: "BookNine", genre:"Science", publish:2011, edition: 2016
    },
    {
        title: "BookTen", genre:"Non-Fiction", publish:1981, edition: 1989
    },
]

let userBooks = books.filter( (bk) => bk.genre === "Science")

userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === "Non-Fiction"
})
console.log(userBooks);


