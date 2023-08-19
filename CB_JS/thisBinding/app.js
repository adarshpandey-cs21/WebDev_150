// imlicit binding 

// let person={
//     name:"adarsh",
//     age:17,
//     sayHello :function(){
//         console.log(this);
//         console.log(`hello from ${this.name}`);
//     }
// }


// explicit Binding 

function fun(name,age){
    console.log(this);
    this.name=name;
    this.age=age;
}
// fun("adarsh",78); //now the above this refer to window object so use explicitBinding

let p={
    l:"aise hi",
    k:90
}

// fun.call(p,"adarsh",78); //wxplicit binding this to p object //call function execute function immediately so anothet method is bind


let f=fun.bind(p);

// 1000000 lines 

f();


