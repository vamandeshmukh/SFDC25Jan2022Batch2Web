
// console.log("09-js-class-object.js");

// let someObject = {
//     someProperty: 'some value'
// }

num = 10;


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
console.log(obj.eid, obj.firstName, obj.salary);

class Product {
    pid;
    productName;
    price;

    sellProduct = () => {
        console.log('Sell the product at ' + this.price);
    }

    constructor(pid, productName, price) {
        this.pid = pid;
        this.productName = productName;
        this.price = price;
    }
}

let myProduct = new Product(1001, 'laptop', 10.5);
console.log(myProduct);
myProduct.sellProduct();
