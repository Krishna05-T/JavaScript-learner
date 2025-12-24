/*
    A Promise represents the eventual success or failure of an asynchronous operation and its resulting value.

A Promise is an object that handles asynchronous operations by representing a future value.

Why Promises Are Needed (Async Operations)

Some operations take time and should not block the main thread, such as:

Network/API calls

File access

Database queries

Cryptography

Timers

Promises provide a clean and structured way to handle these tasks.
*/

// Creat a promise 

const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    // DB calls, cryptography, network

    setTimeout(function() {
        console.log('Task compled')
        resolve();
    },1000)
})

// consume promise
promiseOne.then(() => {
    console.log('Promise Consumed') // this is not link so it not work to link it wiht promise use resolve();
})

// chaining :  of then because in then function we cannot return or store value to variable it only return to another then function by chaining then funtion;

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000)
}).then(() => {
    console.log('Async task consumed')
})


// How to pass data 
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Krishna", age: 19, email: "krishnatirole05@gmail.com"})
    },1000)
})

promiseThree.then((user) => {
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) =>{
    setTimeout(()=> {
        let error = false;
        if(!error) {
            resolve({name: "Mayank", age: 18, email: "mayanktirole07@gmail.com"});
        }else {
            reject("Error : Something went wrong");
        }
    },1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.name;
})
.then((name) => {
    console.log(`User name is ${name}`);
})
.catch((error) =>{
    console.log(error)
})
.finally(() => console.log("The promise is either resolver or rejected"))


//  we can also done it by asyc / await

const promiseFive = new Promise((resovle, reject) => {
        setTimeout(()=>{
             error = false;
             if(!error) {
                resovle({name: "Mukesh", age: 40, email: "mukeshtirole18@gmail.com"})
             } else {
                reject("Error: Something went worng");
             }
        }, 1000)
});

async function ConsumepromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch(error) {
        console.log(error);
    }
}

ConsumepromiseFive();

async function getAllUsers() {
    try{
        const reponse = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data = await reponse.json();
        console.log(data);
    }catch(error) {
        console.log(error)
    }
}

// getAllUsers();  

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('The promise is either resolved or rejecte')
})