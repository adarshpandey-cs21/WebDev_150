import React, { useEffect, useState } from 'react'

function Timer() {
    const [d,setD]=useState(0);
    useEffect(()=>{
           const k= setInterval(function(){
                setD(d+1);
            },1000)

            return function(){
                clearInterval(k);
            }
    },[d])
  return ( //when we return something from use effect it is always a function and called as cleanup function 
    <div>Timer-{d}</div>
  )
}

export default Timer