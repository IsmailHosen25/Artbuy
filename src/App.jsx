import './App.css'
import {Routes,Route} from "react-router-dom"
import Nav from "./Pages/Global_Components/Nav/Nav"
import Home from './Pages/HomePage/Home'
import Fourzerofour from "./Pages/Global_Components/Fourzerofour"
import Login from './Pages/Login & Sign/Login'
import Singup from './Pages/Login & Sign/Singup'
function App() {

  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Singup/>}/>
       <Route path='*' element={<Fourzerofour/>}/>
      </Routes>
    </>
  )
}

export default App
