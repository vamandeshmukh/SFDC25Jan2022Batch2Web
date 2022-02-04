
// node 08-js-async.js

// console.log("statement 1");
// console.log("statement 2");
// console.log("statement 3");
// // OP: 1 2 3

// setTimeout(arg1, arg2); // pauses execution for some time
// setTimeout(arg1, arg2); // takes two arguments 
// setTimeout(arg1 is a function, arg2 is number of milliseconds);
// setTimeout(() => {} , 2000);

// console.log("statement 1"); // loads from HTML document  

// setTimeout(() => {
//     console.log("statement 2"); // loads from database   
// },
//     2000);

// console.log("statement 3"); // loads from twitter 

// // OP: 1 3 2 

// assignment - do this 
// setTimeout( (arg) => { some code , arg()} , 2000 );
// let funAsArg =() => {}
// OP should be: 1 2 3   

console.log("statement 1");

const someFunction = (argumentThatNeedsFunction) => {
    setTimeout(() => {
        console.log("statement 2");
        argumentThatNeedsFunction();
    },
        2000);
}

const functionThatIspassedAsArgument = () => {
    console.log("statement 3");
}
someFunction(functionThatIspassedAsArgument);

// OP: 1 2 3   
