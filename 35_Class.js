class UserCla {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUser() {
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new UserCla("Jay", 'jay@gmail.com', 123);
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUser());

// Behind the sence

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}@xyz`
}

User.prototype.changeUser = function() {
    return `${this.username.toUpperCase()}`
}

const user2 = new User("Roni", 'roni@gmail.com', 454)
console.log(user2)
console.log(user2.encryptPassword());
console.log(user2.changeUser());