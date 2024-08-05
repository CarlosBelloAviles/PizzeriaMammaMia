import React from 'react'



function Nagvar() {
  const total = 25000; 
  const token = false;
  return (
    <section className='container'>
    <div className='Nav_Button'>
      <p className='title'>Pizzería Mamma Mía!</p>
      <nav className='menu'>
        <button>🍕 Home</button>
        {
        token? 
        (<div className='bottons' >
        <button >🔓 Profile</button>
        <button>🔒 Logout</button>
      </div>) : 
        ( <div className='bottons'>
        <button >🔑 Login</button>
        <button >🔐 Register</button>
        </div>)
        }
        </nav>
     </div>
        <div className='total'>  
        <button >🛒${total.toLocaleString()}</button>
        </div>
    </section>
  )
}

export default Nagvar