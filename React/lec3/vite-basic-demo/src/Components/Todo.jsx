import React, { useState } from 'react'

function Todo() {
    const [title,setTitle]=useState("Gym");
    function changeTodo(){
            setTitle(Math.floor(Math.random()*10));
    }
  return (
    <div>

        <ShowTodo title={title} desc="kl se jabai"/>
        <button onClick={changeTodo}>click</button>
        
        <ShowTodo title="pdhe" desc="kl se jabai"/>
        
        <ShowTodo title="khele" desc="Av chal"/>
    </div>
  )
}


function ShowTodo({title,desc}){
    return(
        <>
            <h1>{title}</h1>
            <p>{desc}</p>
        </>
    )
}

export default Todo