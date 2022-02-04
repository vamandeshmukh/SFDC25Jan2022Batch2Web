// node 05-js-functions.js

// // old JS function 
// function fun() {
//     console.log('fun');
// }

// fun();

// // modern JS - arrow function 
// const fun2 = () => {
//     console.log('fun2');
// }

// fun2();

//// JS functions always return undefined, if they don't have return statement.

// const fun4 = () => {
//     console.log(' no args no return value');
// }
// console.log(fun4()); // undefined 


// // functions with return value

// const valueOfPi = () => {
//     return 3.142;
// }
// const num = valueOfPi();
// console.log(num);

// functions with arguments 

const fun3 = (a, b) => {
    return a + b;
}

// // const num2 = fun3(10, 20);
// // console.log(num2);
// // shortcut 
// console.log(fun3(10, 20)); // 20 
// console.log(fun3(10)); // NaN
// console.log(fun3(10, 20, 30)); // 30
// console.log(fun3()); // NaN

// // functions can accept object as arguments 

// // const fun4 = (arg) => {
// //     console.log(arg);
// // }

// const fun4 = (arg) => {
//     console.log(arg.firstName);
// }

// // const someArg = 10;
// // const someArg = 'Abc';
// // const someArg = true;
// // const someArg = [10, 20, 30];
// const someArg = {firstName: 'Sonu'};

// fun4(someArg);

// function can accept another function as argument 
// function (fun5()) can accept another function (funAsArg()) as argument (arg)

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
fun5(() => {console.log('anonymous function invoked.');});

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


