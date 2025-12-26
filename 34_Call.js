function SetUsername(username) {
    this.username = username;
    console.log('called')
}

function creatUser(username, email, password) {
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const user1 = new creatUser("Rohit", 'rohit@gmail.com', 234);
console.log(user1)