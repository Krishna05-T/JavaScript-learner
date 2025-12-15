// Date is a built-in object in JavaScript that represents a single moment in time.
// It provides various methods to work with dates and times.

let now = new Date();
console.log(now);

// get methode that give speific value

console.log(now.getFullYear());     // year
console.log(now.getMonth()+1);      // month (0-11, so we add 1 to get 1-12)
console.log(now.getDate());         // day
console.log(now.getHours());       // hour
console.log(now.getMinutes());     // minute
console.log(now.getSeconds());     // second
console.log(now.getDay());         // day of the week (0=Sunday, 1=Monday, ... 6=Saturday)

// set methode that set speific value

let d = new Date();
d.setFullYear(2026);
d.setMonth(0);
d.setDate(1);

// set time 

d.setHours(12)
d.setMinutes(0)
d.setSeconds(0)
d.setMilliseconds(45);

console.log(d);

// Creat a custom date 

let dat = new Date(2006,9,2);
console.log(dat);

let dat2 = new Date(2006,9,2,4,0,0);
console.log(dat2);

let dat3 = new Date("2006-9-2");
console.log(dat3);

//  Date difference

let date1 = new Date("2025-11-1");
let date2 = new Date("2025-11-10");

diff = date2 - date1;

days = diff /(1000 *60*60*24);      // convert milliseconds to days how 1000 milliseconds = 1 second , 60 seconds = 1 minute , 60 minutes = 1 hour , 24 hours = 1 day
console.log(Math.floor(days));

// Calculate time difference in hours and minutes
let start = new Date("2025-11-1 10:30:40");
let end = new Date("2025-11-1 15:45:35");

let difference = end - start;
let hours = Math.floor(difference / (1000 * 60 * 60));
let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((difference % (1000 * 60)) / 1000);


console.log(`Time Difference: ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`);


// Formate date and time

let mydate = new Date();
console.log(mydate.toString());     // full date and time string

console.log(mydate.toDateString());     // date string only
console.log(mydate.toTimeString());    // time string only

console.log(mydate.toLocaleDateString());   // locale-specific date string
console.log(mydate.toLocaleTimeString());   // locale-specific time string
console.log(mydate.toLocaleTimeString());   // locale-specific time string

console.log(mydate.toISOString());   // ISO 8601 format
console.log(mydate.toJSON());   // JSON format