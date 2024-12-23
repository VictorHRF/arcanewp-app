import React from 'react'
import { NavLink } from 'react-router-dom'

export const CategorySelector = ( { personajeId } ) => {
  return (
    <div className='character-section'>
        <h2 className='titulo t-personaje'>FONDOS DE PANTALLA {personajeId}</h2>
        <div className='selector-dispositivo'>
        <NavLink
            className={({isActive}) => `selector-item ${ isActive ? 'seleccionado' : ''}`}
            to={`/personajes/${personajeId}/pc`} >
            Horizontal
        </NavLink>
        <NavLink 
            className={({isActive}) => `selector-item ${ isActive ? 'seleccionado' : ''}`}
            to={`/personajes/${personajeId}/mobile`} >
            Vertical
        </NavLink>
        </div>
    </div>
  )
}
