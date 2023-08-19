const x=new Promise(function(resolve,reject){
    let randomNum=Math.random();
    console.log(randomNum);
    if(randomNum<0.5){
        resolve();
    }else{
        reject();
    }
})

x.then(function(){
    console.log("accepted")
}).catch(function(){
    console.log("rejected");
})

//see use of promise in callbackHell