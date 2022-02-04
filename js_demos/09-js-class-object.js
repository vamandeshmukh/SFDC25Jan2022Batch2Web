
// console.log("09-js-class-object.js");

// let someObject = {
//     someProperty: 'some value'
// }

class Employee {

    eid;
    firstName;
    salary;

    getSalary = () => {
        return this.salary;
    }

}

let obj = new Employee();
obj.eid = 101;
obj.firstName = 'Sonu';
obj.salary = 10.5;
console.log(obj.getSalary());
console.log(obj.firstName);


class Product {
    pid;
    productName;
    price;
    constructor (pid, productName, price) {
        // assigmnet 
    }
}

let myProduct = new Product(1001, 'laptop', 10.5);

