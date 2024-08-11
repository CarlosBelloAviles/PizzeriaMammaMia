
import Nagvar from './componentes/Nagvar.jsx'
import Home from './componentes/Home.jsx'
import Footer from './componentes/Footer.jsx'
import Login from './componentes/Login.jsx'
import './App.css'
import Registro from './componentes/Registro.jsx'

function App() {
  

  return (
      <>
      <div className="contenedor_padre" >
      <Nagvar/>
      {/*<Home/>*/}
      {<Login/>}
      {/*<Registro/>*/}
      <Footer/>
      </div>
      </>
  )
}

export default App
