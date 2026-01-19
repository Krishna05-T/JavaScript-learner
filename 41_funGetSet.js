function User(email, password) {
    this.email = email
    this.password = password

    Object.defineProperty(this, 'email', {
    get: function() {
        return this._email.toUpperCase()
    },
    set: function(value) {
        this._email = value
    }
})

Object.defineProperty(this, 'password', {
    get: function() {
        return this._password.toUpperCase()
    }, 
    set: function(value) {
        this._password = value;
    }
})

}

const chai = new User("new@gmail.com", '34haig');

chai.email = 'ram@gmail.com';
console.log(chai.email);
chai.password = '321abc'
console.log(chai.password)



