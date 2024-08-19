function Cart({producto, increment, decrement}) {
 
  return (
    <div className='pizzaCart'>
       <img className='pizzaImgCart' src={producto.img} alt="" />
       <h3>{producto.name}</h3>
       <p>precio: ${producto.price * producto.count }</p>
       <div className='contadorPizza'>
       <button  onClick={() => { decrement(producto.id )}} className='disminuir'>-</button>
       <p>{producto.count }</p>
       < button onClick={() => { increment(producto.id )}} className='incrementar'>+</button>
       
       </div>
       
    </div>
  )
}

export default Cart