// ------------click event-----------------------------------------------

const submit=document.getElementById("submit");

// submit.dir();
function sayMsg(){
    console.log("successfully submitted");
}
function shout(){
    console.log("shout...............");
}
// submit.onclick=sayMsg; //using onclick we cannot run two function so eventListner comes into the picture

submit.addEventListener('click',sayMsg);

submit.addEventListener('click',shout); 





// ---------------mouse  event--------------------------------------------------------

const buttons=document.querySelectorAll("section button");

// buttons[0].addEventListener()
// or

for(btn of buttons){
    btn.addEventListener('mouseenter',(e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor="lightblue";
        e.target.style.boxShadow="1px 2px 3px gray"
    })

    
    btn.addEventListener('mouseleave',(e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor="";
        e.target.style.boxShadow=""
    })
}



// --------------KeyboardEvent-------------------------------------------------------

const search=document.getElementById("search");
search.addEventListener('keydown',()=>{
    console.log(search.value);
})

// --------------form events-----------------------------