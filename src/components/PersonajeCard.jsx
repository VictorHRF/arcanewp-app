import React from 'react'

export const PersonajeCard = ({nombre, img}) => {
  return (
    <div className='character-card'>
        <h3 className='rubik-glitch-regular'>{nombre}</h3>
        <img className='personaje-img' src={`/images/presentacion-personajes/${img}`} alt="" />
    </div>
  )
}
