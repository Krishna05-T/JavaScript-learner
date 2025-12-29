const User = {
    _email: 'new@gmail.com',
    _password: '49hfkd',

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    },
    get password() {
        return this._password.toUpperCase();
    },
    set password(value) {
        this._password = value;
    }
}

const chai = Object.create(User);

chai.email = 'chai@gmail.com';
chai.password = 'chai123';

console.log(chai)