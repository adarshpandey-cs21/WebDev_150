import React, { memo, useState } from 'react'

function Memoo() {
    const [t,setT]=useState("Chithi aayi h");
  return (
    <div>
        
        <Mymemo titl={t}/>
        <button onClick={()=>setT(Math.floor(Math.random()*10))}>Click</button>
        <Mymemo titl="Barish ho rhi h"/>
        <Mymemo titl="pdhai ho rhi h"/>
        <Mymemo titl="dance ho rhi h"/>


    </div>
  )
}

// function Mymemo({titl}){
//     return(
//         <>
//             <h1>{titl}</h1>        
//         </>
//     )
// }

let Mymemo=memo(function ({titl}){
    return(
        <>
            <h1>{titl}</h1>        
        </>
    )
})
export default Memoo