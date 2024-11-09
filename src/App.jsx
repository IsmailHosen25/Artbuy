import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/HomePage/Home'
import Fourzerofour from "./Pages/Global_Components/Fourzerofour"
import Login from './Pages/Login & Sign/Login'
import Singup from './Pages/Login & Sign/Singup'
import ProfileArtist from './Pages/ProfilePages/Profile_Artist/ProfileArtist'
function App() {

  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Singup/>}/>
       <Route path='/profile_artist' element={<ProfileArtist/>}/>
       <Route path='*' element={<Fourzerofour/>}/>
      </Routes>
    </>
  )
}

export default App
