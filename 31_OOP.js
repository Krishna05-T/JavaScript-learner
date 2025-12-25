// ES6

const UserObj= {
    username: "Krishna ",
    loginCount: 9,
    isLogged: true,

    getUserDetail: function() {
        console.log('Got user detail from database')
        // console.log(`Username is ${username}`)   The error happens because username is not defined inside the function, so you must use this.username to access the object’s property.
        console.log(`Username is ${this.username}`)
        // Because this refers to the current object, and JavaScript uses this.username to access the username property that belongs to that object.
    }
}

// console.log(UserObj)
// console.log(UserObj.username);
// console.log(UserObj.getUserDetail());

function User(username, loginCount, isloggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }
    return this     // this is automaticlly return the current object inplicit
}

const userOne = new User("Naman", 6, true);
const userTwo = new User("Aditi", 8, false);
// here userTwo is overright userOne value which is not good so we use 'new' keyword Creates independent instances.
console.log(userOne);
console.log(userTwo);
