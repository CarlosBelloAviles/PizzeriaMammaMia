import React from 'react'

function Header(props) {
  return (
    <section className='header'>
      <div className='titulo'>
        <h1>{props.titulo}</h1>
        <p className='subtitulo'>{props.descripcion}</p>
        </div>

    </section>
  )
}

export default Header