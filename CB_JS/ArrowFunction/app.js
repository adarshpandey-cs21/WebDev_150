// normal function 

// function fun(){
//     console.log("hello");
// }

// ----------functional expression  or firstClassFuncion

// const square=function(num){
//     return num*num;
// }

// -------------------Arrow function 

let sum=(x,y)=>{
    return x+y;
}

//---------Arrow function implicit return
let squares=num=>num*num; //if there is one parameter then not need to use parenthesis
                        // if there is one single return then not need to use curly Brackets
// Note* :- In arrow function  this keyword behave differenrtly it refer to window Object;
// but in normal function it reefer to parent Object;