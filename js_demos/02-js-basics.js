// run  node 02-js-basics.js

// JS basics 

// datatypes in JS 
// 1. primnitive types 
// number, string, boolean 
// 2. reference types 
// objects 


// single line comment 

/*
multi line 
comment 
*/

console.log('Some text'); 

// let str

let myName = `Vaman`; // string 
let mySalary = 10.5; //number 
let myBonus = 10; // number 
let isIndian = true; // boolean 

console.log(myName);
console.log(mySalary);
console.log(mySalary + myBonus);
console.log(isIndian);

// int num2 = 10;


let num = 10;

// num2 = 20;  // don't use in modern JS 
// var num3 = 30; // don't use in modern JS 
// use let and const in modern JS 
let num4 = 40; // value can change throughout the program execution 
const num5 = 50; // value can not change 
console.log(num4);
console.log(num5);
num4 = 45;
num5 = 55;
console.log(num4);
console.log(num5);



