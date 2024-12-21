import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/HomePage/Home'
import Fourzerofour from "./Pages/Global_Components/Fourzerofour"
import Login from './Pages/Login & Sign/Login'
import Singup from './Pages/Login & Sign/Singup'
import Profile from './Pages/ProfilePages/Profile_Artist/Profile'
import CartProvider from './Contexts/CartContext'
import Cart from './Pages/Cart/Cart'
import Protectedpage from './Protectedpage'
function App() {

  return (
    <>
    <CartProvider>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Singup/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/profile' element={<Protectedpage Components={Profile}/>}/>
       <Route path='*' element={<Fourzerofour/>}/>
      </Routes>
    </CartProvider>
    </>
  )
}

export default App
