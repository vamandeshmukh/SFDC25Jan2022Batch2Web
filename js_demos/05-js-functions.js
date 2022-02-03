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

// const num2 = fun3(10, 20);
// console.log(num2);
// shortcut 
console.log(fun3(10, 20)); // 20 
console.log(fun3(10)); // NaN
console.log(fun3(10, 20, 30)); // 30
console.log(fun3()); // NaN

