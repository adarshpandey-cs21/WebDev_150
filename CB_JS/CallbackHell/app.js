// this is not a good way of writing async js
// better way is to use promises

// function downloadFile(url,downloaded){
//     console.log("downloading started");
//     setTimeout(()=>{
//         let path=url.split("/").pop();
//         downloaded(path);
//     },5000)
// }

// function fileCopmression(path,fileCompressed){
//     console.log(`file compression started for ${path}`);
//     setTimeout(()=>{
//         let filec=path.split('.')[0]+".zip";
//         fileCompressed(filec)
//     },3000)
// }

// function fileUpload(filek,uploaded){
//     console.log(`uploading started for ${filek}`);
//     setTimeout(()=>{
//         let upload="https://localhost/"+filek;
//         uploaded(upload);
//     },2000)
// }
// downloadFile("https://google.com/flower/rose.jpg",function (path){
//     console.log(`file successfully downloaded as ${path}`);
//     fileCopmression(path,function(filek){
//         console.log(`file compression succefully done as ${filek}`);
//         fileUpload(filek,function (upload){
//             console.log(`file sucessfully uploded as ${upload}`);
//             console.log("everything is done");
//         })
//     })
// })

// --------------------Better Way using promise---------------

function downloadFile(url){
    if(!url.startsWith("http")){
        throw new Error("Invalid url!!!");
    }
    return new Promise((resolve,reject)=>{
        console.log(`downloading started from ${url}`);
        setTimeout(()=>{
            let path=url.split("/").pop();
            resolve(path);
        },5000)
})
}

function fileCopmression(path){
    return new Promise((resolve,reject)=>{
    console.log(`file compression started for ${path}`);
    setTimeout(()=>{
        let filec=path.split('.')[0]+".zip";
        resolve(filec)
    },3000)
})
}
function fileUpload(filek){
    return new Promise((resolve,reject)=>{
        console.log(`uploading started for ${filek}`);
    setTimeout(()=>{
        let upload="https://localhost/"+filek;
        resolve(upload);
    },2000)
})
}

// downloadFile("https://google.com/flower/rose.jpg").then((path)=>{
//     console.log(`file successfully downloaded as ${path}`);
//     fileCopmression(path)
//     .then((filek)=>{
//         console.log(`file compression succefully done as ${filek}`);
//         fileUpload(filek)
//         .then((upload)=>{
//             console.log(`file sucessfully uploded as ${upload}`);
//             console.log("everything is done!!");
//         });
//     });
// });


downloadFile("https://google.com/flower/rose.jpg")
.then(fileCopmression)
.then(fileUpload)
.then((upload)=>{
    
            console.log(`file sucessfully uploded as ${upload}`);
            console.log("everything is done dona done!!");
})
.catch((err)=>{
    console.log("something went wrong");
    console.log(err.message);  
})


