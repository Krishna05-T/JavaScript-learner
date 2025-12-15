// Object literals in JavaScript

const mySym = Symbol("Key1")

const person = {
    name: "Krishna",
    "full Name": "Krishna Tirole",
    age: 19,
    location: "Indore",
    email: "krishna@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"],
    [mySym]: "myKeys1"             // represent symbol as key we use [ ] without this JS treat as string
};

// access

console.log(person.name);
console.log(person["full Name"]);       // if there is space in property name so it can not access by the (.) we use [ ]
console.log(person["age"]);
console.log(person[mySym]);


// change in properties

person.email = "krishna@facebook.com"
console.log(person.email);

// lock the object so no change occure 

// Object.freeze(person);
// person.age = 12
// console.log(person.age)


// function 

 person.greeting = function() {
    console.log("Welcome JS user")
}

console.log(person.greeting);
console.log(person.greeting());

// Nested Object

const user = {
    email: "user@gmail.com",
    fullName: {
        userFullName :{
            firstName: "Karan",
            lastName: "Wing"
        }
    }
}

console.log(user.fullName);
console.log(user.fullName.userFullName);
console.log(user.fullName.userFullName.firstName);

// Combine Object

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj3 = {5: "a", 6: "b"}

 const obj4 = Object.assign({}, obj1, obj2, obj3);
 console.log(obj4);
 
 const obj5 = {...obj1, ...obj2, ...obj3}
  console.log(obj5);

  // Array Object

  const users = [
        {
            id: "11",
            email: "user11@gmail.com"
        },
         {
            id: "12",
            email: "user12@gmail.com"
        },
         {
            id: "13",
            email: "user13@gmail.com"
        }
  ]

// access
  console.log(users[1].id);
  console.log(users[1].email);


  const new_User ={};
  new_User.name = "Krishna"
  new_User.email = "krishna@gmail.com"
  new_User.isLoggedIn = false

  console.log(Object.keys(new_User));
  console.log(Object.values(new_User));
  console.log(Object.entries(new_User));
  console.log(new_User.hasOwnProperty('isLoggedIn'));

  // De-structuring

  const course = {
    coursName:"JavaScript",
    coursInstructor: "Hitesh",
    price: "999"
  }

  const {coursInstructor : instructor, coursName : name} = course
  console.log(course.coursInstructor);       
  console.log(course.coursName);
                                                    // De-structuring
  console.log(instructor);     
  console.log(name);
  

  
  