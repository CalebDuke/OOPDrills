// let person1 = {
//     name: 'person1',
//     sayHello: function() {
//         console.log(`hello my name is ${this.name}!`)
//     }
// }
// person1.sayHello();
// let person2 = {
//     name : 'Person2',
//     sayHello: function() {
//     console.log(`Hello my name is ${this.name}!`)
//     }
// }
// person2.sayHello();
// let person3 = {
//     name : 'Person3',
//     sayHello: function() {
//     console.log(`Hello my name is ${this.name}!`)
//     }
// }
// person3.sayHello();
// let person4 = {
//     name : 'Person4',
//     sayHello: function() {
//     console.log(`Hello my name is ${this.name}!`)
//     }
// }
// person4.sayHello();
// let person5 = {
//     name : 'Person5',
//     sayHello: function() {
//     console.log(`Hello my name is ${this.name}!`)
//     }
// }
// person5.sayHello();

// Create a constructor function that will take a name, city, and age. (Remember, pseudo classes look like functions but are named with starting with a capital letter ex: function Example() null).

// Write a method that will print a string similar to this “Hey! My name is ___ I am __ years old and live in __”.
// Create 5 instances of the same friends from step 1, except this time use the pseudo class and method we just created.





// function Person(name, city, age) {
    
    //     this.name = name;
    //     this.city = city;
    //     this.age = age;
    // };
    
    // Person.prototype.sayHello = function () {
        //     console.log(`Hey! My name is ${this.name} I am ${this.city} years old and live in ${this.age}.`);
        // }
        
        // let p1 = new Person ('Name1', "bham", 21);
        // let p2 = new Person ('Name2', "bham", 22);
        // let p3 = new Person ('Name3', "bham", 23);
        // let p4 = new Person ('Name4', "bham", 24);
        // let p5 = new Person ('Name5', "bham", 25);
        // p1.sayHello()
        // p2.sayHello()
        // p3.sayHello()
        // p4.sayHello()
        // p5.sayHello()
        
        // Using the ES6 syntax makes object oriented programming in javascript much easier to understand. Let’s use the ES6 syntax and create the same class that we just did. (Hint: ES6 classes are not made using a constructor function, they use a keyword: class. They have a constructor which is used to take in the parameters name, city, and age. And methods will not need to be prototypes!).

// class Person {
//     constructor (name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
//     sayHello(){
//         console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`);
//     }
// }
// let p1 = new Person ('Name1', 21, 'Bham')
// let p2 = new Person ('Name2', 22, 'Bham')
// let p3 = new Person ('Name3', 23, 'Bham')
// let p4 = new Person ('Name4', 24, 'Bham')
// let p5 = new Person ('Name5', 25, 'Bham')
// p1.sayHello()
// p2.sayHello()
// p3.sayHello()
// p4.sayHello()
// p5.sayHello()



