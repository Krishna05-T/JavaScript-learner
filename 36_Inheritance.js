class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }
    AddNewCorse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher('Keshave', 'keshave@gmail.com', 232);
console.log(chai)

chai.logMe();
chai.AddNewCorse();

const coffee = new User("Rohan");
console.log(coffee);

coffee.logMe();

console.log(chai instanceof Teacher)