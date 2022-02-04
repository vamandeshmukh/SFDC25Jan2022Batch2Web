// node 07-js-misc-concepts.js 


// switch cases in JS 

let input = 2;
let output;

switch (input) {
    case 1:
        output = 'One';
        break;
    case 2:
        output = 'Two';
        break;
    case 3:
        output = 'Three';
        break;
    default:
        output = 'Other number';
}
console.log(output);

// loops in JS 

// for loop 
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for of loop 
// let myMarks = [98, 95, 97, 96, 98];
// for (mark of myMarks ) {
//     console.log(mark);
// }

// while loop 
// let num = 1;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// do while loop 
let num = 1;
do {
    console.log(num);
    num++;
}
while (num <= 10);

