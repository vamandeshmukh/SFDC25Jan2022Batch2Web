// callbacks in JS
// functions passed as arguments to another function  

const fun5 = (arg) => {
    console.log('fun5 invoked.');
    arg(); // function call  
}

const funAsArg = () => {
    console.log('funAsArg invoked.');
}
// invoke a function - 1
fun5(funAsArg); // function call 
// invoke a function - 2
fun5(() => {
    console.log('anonymous function invoked.');
});

// define a funciton 
const addNums = (a, b) => {
console.log(a + b);
}
// invoke a function - 1
let x = 10;
let y = 20;
addNums(x, y);
// invoke a function - 2
addNums(10, 20);
