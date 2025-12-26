let myName = "krishna       ";
let mychannel = "True Motivatioin";

console.log(myName.length)

// there is many spaces in so it give worng length
//console.log(myName.truelength) 
// this is not present in prototype

//  So we can make also creat our properties because properties also a function  

let myHero = ["Thor", "SpiderMan"];

let heroPower = {
    Thor: "Hammer",
    SpiderMan: "Sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.SpiderMan}`);
    }
}

Object.prototype.hitesh = function() {
    console.log(`histesh is present in all object`);
}
// if we give any property of object by default it can access in all 
Array.prototype.heyHitesh = function() {
    console.log(`HeyHitesh is only present array`)
}
// the property only present in array

heroPower.hitesh();
myHero.hitesh();
myHero.heyHitesh();
//heroPower.heyHitesh();

// inheritance

const user = {
    username: "Krishan",
    email: 'user@gmail.com'
}

const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailabe: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user;


// morden syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)

let Name = "Krishna        "

String.prototype.trueLength = function() {
    console.log(this.name);
    console.log(this.trim().length);
}
 
Name.trueLength()
"IceTea ".trueLength();