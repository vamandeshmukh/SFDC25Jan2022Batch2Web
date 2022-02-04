
// node 08-js-async.js

// console.log("statement 1");
// console.log("statement 2");
// console.log("statement 3");
// // OP: 1 2 3

// setTimeout(arg1, arg2); // pauses execution for some time
// setTimeout(arg1, arg2); // takes two arguments 
// setTimeout(arg1 is a function, arg2 is number of milliseconds);
// setTimeout(() => {} , 2000);

console.log("statement 1");
setTimeout(() => {
    console.log("statement 2"); // takes 3 seconds to execute  
},
    2000);
console.log("statement 3");

// OP: 1 3 2 
