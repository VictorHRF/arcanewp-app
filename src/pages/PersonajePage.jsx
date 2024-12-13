import React from 'react'
import {  NavLink, Outlet, useParams } from 'react-router-dom';

export const PersonajePage = () => {

  const { personajeId } = useParams();

  return (
    <div className='personaje-nav'>
      <h2 className='titulo t-personaje'>{personajeId}</h2>

      <div className='selector-dispositivo'>
      <NavLink 
          className={({isActive}) => `selector-item ${ isActive ? 'seleccionado' : ''}`}
          to={`/personajes/${personajeId}/pc`} >
            Computadora
        </NavLink>
        <NavLink 
          className={({isActive}) => `selector-item ${ isActive ? 'seleccionado' : ''}`}
          to={`/personajes/${personajeId}/mobile`} >
          Celular
        </NavLink>
      </div>


      <Outlet />
    </div>
  )
}
