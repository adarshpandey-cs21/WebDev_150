import React from 'react'


function Perso() {
    function handleClick(){
        console.log("Button Clicked");
    }
    function handleClick2(id){
        console.log(id);
    }
    
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        <button onClick={()=>handleClick2(100)}>Click</button>
        
    </div>
  )
}

export default Perso