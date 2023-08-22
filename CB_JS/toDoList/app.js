
const inn=document.querySelector('#inp')
const buttons=document.querySelector('#btn');
const ul=document.querySelector('#list');
buttons.addEventListener('click',()=>{
    
    const todo=inn.value;
    if(todo===''){
        alert("Empty ToDo !!")
        return;
    }
    const li=document.createElement('li');
    li.innerText=todo;

//removing todo list
    li.addEventListener('click',()=>{
        li.remove();
    })
    ul.append(li);
    inn.value="";
});



