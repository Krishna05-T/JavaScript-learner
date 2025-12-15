let myYtname = "Krishna";

let anotherName = myYtname;
anotherName = "True Motivation";

console.log(myYtname);
console.log(anotherName); //not change in myYTname becaue it pass the copy of it

let userOne = {
    email: "krishnatirole05@gmail.com",
    upi: "123@ybl"
}

let userTwo = userOne;
userTwo.email = "krishnatirole@google.com";

console.log(userOne.email);
console.log(userTwo.email);     // it change because it pass orignal reference 

