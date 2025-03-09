import React from 'react'

export const PersonajeCard = ({nombre, img}) => {
  return (
    <>
        <h3 className='rubik-glitch-regular'>{nombre}</h3>
        <img className='character-img' src={`/images/presentacion-personajes/${img}`} alt="" />
    </>
  )
}
