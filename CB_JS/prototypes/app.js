
const person={
    name :"adarsh",
    age:19,
    roll:4,
    sayHello : function(){
        console.log("hello from adarsh")
        //when a function doesnot return anything it return undefined by default
    }
}

console.log(person);
console.log(person.name);

let p1=Object.create(person);

console.log(p1.age);
console.log(p1.sayHello());
console.log(p1.hasOwnProperty("age"));

p1.age=25;
console.log(p1.age);
console.log(p1.hasOwnProperty("age"));







// ------------------------------------------------------------------------------

// let str="adarsh";
// console.log(str.__proto__);
// console.log(String.prototype.__proto__);
// console.log(String.prototype.__proto__===Object.prototype);
// console.log(Object.prototype.__proto__);
