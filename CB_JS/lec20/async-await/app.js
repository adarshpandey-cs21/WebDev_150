async function add(x,y,z){
    return x+y+z;
}

add(4,5,7)
    .then((ans)=>{
        console.log(ans);
    })
    .catch((err)=>{
        console.log(err);
    })


    // await keyword put our async function on hold to resolve