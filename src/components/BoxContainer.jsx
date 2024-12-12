import React from 'react'
import { Link } from 'react-router-dom'

export const BoxContainer = ({titulo, capitulo}) => {
  return (
    <>
      <div className='box-container'>
        <p className='subtitulo'>Episodio { capitulo }</p>
        <p className='rubik-glitch-regular subtitulo'> { titulo } </p>
      </div>
    </>
  )
}
