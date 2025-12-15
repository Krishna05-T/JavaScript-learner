
// for loop

for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(element);
    
}

//console.log(element);  // error element is not defined


// if condition in loop

for (let i = 0; i <=10; i++) {
    const element = i;
    if(element === 5) {
        console.log("5 is best ");
}
    console.log(element);
    
}



// Nested for loop

for(let i=1; i<=10; i++) {
    console.log(`\n Table of : ${i}`);
    for(let j=1; j<=10; j++) {
        console.log(` ${i} * ${j} = ${i*j}`);
    }
}


// Looping through Array

const myArr = ["flash", "batman", "superman", "wonderwoman"];

for(let i=0; i < myArr.length; i++){
    console.log(myArr[i]);
}

//it not give out of bound execption it give undefined


// keyword use in loop 

for(let i=1; i<5; i++) {
    if(i=== 3) {
        break;  // it stop the loop when condition is true
    }
    console.log(i); 
}


for(let i=0; i<=10; i++) {
    if( i%2 === 0) {
        continue;       //it skip num when condition is true
    }
    console.log(i);
}