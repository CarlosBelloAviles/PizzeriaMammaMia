
import Nagvar from './componentes/Nagvar.jsx'
import Home from './componentes/Home.jsx'
import Footer from './componentes/Footer.jsx'
import Login from './componentes/Login.jsx'
import './App.css'
import Registro from './componentes/Registro.jsx'
import CartGrilla from './componentes/CartGrilla.jsx'



function App() {
  

  return (
      <>
      <div className="contenedor_padre" >
      <Nagvar/>
      
      {/*<Home/>*/}
      <CartGrilla/>
      {/*<Login/>*/}
      {/*<Registro/>*/}
      <Footer/>
      </div>
      </>
  )
}

export default App
