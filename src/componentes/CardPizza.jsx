import React from 'react'

const CardPizza =(props) => {
  return (
    
    <div className='cardPizza'>
    <img src={props.imagen} className='pizzaImg'></img>
     
        <h3 className='tittleCard'>Pizza {props.nombre}</h3>
        
        <div >
          <hr />
      <h4>Ingredientes: </h4>
        <ul>
        {props.ingredientes.map((ingrediente, index)=> (
          <li key={index}>{ingrediente}</li>
        ))}
        </ul>
      
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