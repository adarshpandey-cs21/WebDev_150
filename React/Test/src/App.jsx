import React,{ useState,Suspense } from "react"
// import Dashboard from "./componets/Dashboard"
import { v4 as uuidv4 } from 'uuid';
import Home from "./componets/Home";

const Dashboard =React.lazy(()=>import('./componets/Dashboard'));
import {Link,BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  let arr=[
    {
      id:uuidv4(),
      name:"Adarsh",
      content:"Hi! this my first blog"
    },
    {
      id:uuidv4(),
      name:"Ankit",
      content:"blog pdhlo bhai"
    },
    {
      id:uuidv4(),
      name:"Anmol",
      content:"I am fullstack Developer"
    },
  ]
  
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Suspense fallback="load ho rhal hai....">
            <Dashboard/>
          </Suspense>}/>
        <Route path="/home" element={<Home arr={arr}/>}/>
      </Routes>
      </BrowserRouter>
    </>
    )
}

export default App
