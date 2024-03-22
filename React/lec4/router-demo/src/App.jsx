import React from 'react';
import {BrowserRouter,Routes,Route,useNavigate}from 'react-router-dom';
// import Product from './Components/Product';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import { Suspense } from 'react';
const Product =React.lazy(()=>import('./Components/Product'));

function App() {
  


  return (
    <div>
      <BrowserRouter>
        {/* <Nav/> */}
        <Routes>
          
          <Route path='/products' element={<Suspense fallback="load ho rhal hai....">
            <Product/>
          </Suspense>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// function Nav(){
//   let navigate=useNavigate();
//   function handleEvent1(){
//     // location.href="/dashboard"; //this is not a good way because it violate the React principle SPA
//     navigate('/dashboard');
//   }
//   function handleEvent2(){
    
//     // location.href="/products";
//     navigate('/products');
//   }

//   return(
    
//     <nav>
//       <h1>I am Navbar</h1>
//       {/* <button onClick={handleEvent1}>Dashboard</button>
//       <button onClick={handleEvent2}>Product</button> */}

//     </nav>
//   )
// }

export default App
