import MainNavigation from './components/mainNavigation/MainNavigation';
import { Routes,Route } from "react-router-dom"
import AllQuotes from "./components/pages/AllQuotes"
import AddQuote from "./components/pages/AddQuote"

function App() {
 
  return (
    <>
      <MainNavigation/>
      <section>
        <Routes>
          <Route path="/" element={<AllQuotes/>} />
          <Route path="/new" element={<AddQuote/>} />
        </Routes>
      </section>
     </>
  )
}

export default App
