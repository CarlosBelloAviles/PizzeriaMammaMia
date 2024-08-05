import React from 'react'

const CardPizza =(props) => {
  return (
    
    <div className='cardPizza'>
    <img src={props.img} className='pizzaImg'></img>
     
        <h3 className='tittleCard'>Pizza {props.nombre}</h3>
        
        <div >
          <hr />
      <h4>Ingredientes:
        <p> 🍕{props.ingredientes.join(', ')}</p> 
      </h4>
      <hr />
      <p className='precio'>Precio: <span>$ {props.precio.toLocaleString()}</span></p>
        <hr />
      </div>
      <div className='botones'>
        <button>Ver Más 👀</button>
        <button className='añadir'>Añadir 🛒</button>
      </div>
    </div>
   
  )
}

export default CardPizza