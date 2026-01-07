class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is : ${this.username}`);
    }

    //static is a keyword used in classes to create methods or properties that belong to the class itself, not to its objects (instances).
    // It is belong to the class not object that why is not working iphone.creatId() use User.creatId() 
    static creatId() {
        console.log(`${this.username} ID is : ${Math.floor(Math.random() *100 +1)}`);
    }
}

class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("Aryan" , 'aryan@gmail.com');
console.log(iphone)
iphone.logMe();
iphone.creatId();

const android = new User("Naman");
android.creatId();
