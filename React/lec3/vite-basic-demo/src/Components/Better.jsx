import React, { useState } from 'react'

function Better() {
  return (
    <div>
        <ChangeTodo title="dont speak"/>
        <Todos title="aag lga di"/>
        
        <Todos title="aag bhujha di di"/>
        
        <Todos title="pani lga di"/>
        
        <Todos title="bhkk lga di"/>
    </div>
  )
}

function Todos({title}){
    return (
        <h1>Title:{title}</h1>
    )
}
function ChangeTodo({title}){
    let [t,setT]=useState(title);
    function handleClick(){
        setT(Math.floor(Math.random()*10));
    }

    return(
        <>
        <Todos title={t}/>
        <button onClick={handleClick}>Click</button>
        </>
    )
}
export default Better