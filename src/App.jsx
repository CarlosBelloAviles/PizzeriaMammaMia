
import Nagvar from './componentes/Nagvar.jsx'
import Home from './pages/Home.jsx'
import Footer from './componentes/Footer.jsx'
import Login from './pages/Login.jsx'
import './App.css'
import Registro from './pages/Registro.jsx'
import CartGrilla from './pages/CartGrilla.jsx'
import { Routes, Route } from 'react-router-dom'
import Pizza from './pages/Pizza.jsx'
import NotFound from './pages/NotFound.jsx'
import Profile from './pages/Profile.jsx'



function App() {
  return (
      <>
     <div style={{height:"100vh"}}>
      <Nagvar />
      <Routes>
      < Route path='/' element={<Home/>}/>
        < Route path='/login' element={<Login/>}/>
        < Route path='/registro' element={<Registro/>}/>
        < Route path='/carrito' element={<CartGrilla/>}/>
        < Route path='/pizza' element={<Pizza/>}/>
        < Route path='/profile' element={<Profile/>}/>
        < Route path='*' element={<NotFound/>}/>
      </Routes>
     <Footer/>
     </div>
      </>
  )
}

export default App
