class User{
    constructor(email, password) {
        this.password = password;
        this.email = email
    }

    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password = value;
    }
}

const chai = new User("chai@gmail.com", '3tant');

console.log(chai.email);
console.log(chai.password);
chai.email = 'chai@fb.com'
console.log(chai.email)
