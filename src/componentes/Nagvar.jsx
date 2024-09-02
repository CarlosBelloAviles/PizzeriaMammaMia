import React from 'react'
import { Link } from 'react-router-dom';



function Nagvar() {
  const total = 25000; 
  const token = false;
  return (
    <section className='container'>
    <div className='Nav_Button'>
     
      <p className='title'>Pizzería Mamma Mía!</p>
      <nav className='menu'>
        <Link to={"/"} className='link'>🍕 Home</Link>
        {
        token? 
        (<div className='bottons' >
        <button >🔓 Profile</button>
        <button>🔒 Logout</button>
      </div>) : 
        ( <div className='bottons'>
        <Link to={"/login"} className='link'>🔑 Login</Link>
        <Link to={"/registro"} className='link'>🔐 Register</Link>
        </div>)
        }
        </nav>
     </div>
        <div className='total'>
        <Link to={"/profile"} className='link'>🔓 Profile</Link> 
        <Link to={"/carrito"} className="link">🛒${total.toLocaleString()}</Link>
        
        </div>
    </section>
  )
}

export default Nagvar