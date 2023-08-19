// console.log("start");
// setTimeout(function b(){
//     console.log("inside b");
// },5000);
// console.log("end");



// ------------------------------------

let id=setInterval(function(){
    console.log("iterval started")
},2000);

// clearInterval(id);

setTimeout(function(){
    clearInterval(id);
},10000);
