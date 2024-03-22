import {BrowserRouter,Routes,Route} from'react-router-dom';
import Product from './Components/Product';

function App() {
   
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
