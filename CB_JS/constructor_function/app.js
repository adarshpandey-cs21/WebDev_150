// function fun(name ,age){
//     this.name=name;
//     this.age=age;
// }

// fun("adarsh",19);


// ------------constructor fun-----------

function Person(name,age){
    this.name=name;
    this.age=age;
    // this.sayHello=function(){
    //     console.log(`hello from ${name}`);
    // }

    // Note:- if we create any function here then the same function
    //  automatically got created inside all p1,p2... 
    //  so we need to create it in person prototype 
}

Person.prototype.sayHello=function(){
        console.log(`hello from ${this.name}`);
    }
let p1= new Person("aditya",18);

let p2= new Person("adarsh",19);


// --------------------by this we can modify any arraymethod------------
//Array.prototype.pop()=function(){
    // console.log("i am not going to pop any item");
// }