import React from 'react'
import { Encabezado } from '../components/Encabezado'
import { GridPersonajes } from '../components/GridPersonajes'
import { Outlet, useMatch } from 'react-router-dom';
import BotonSubir from '../components/BotonSubir';

export const PersonajesPage = () => {

  const match = useMatch("/personajes" );

  return (
    <div className='fondo'>
      <Encabezado titulo={"Personajes"} />
      
      {
        match ? <GridPersonajes /> : <Outlet />
      }

      <BotonSubir />
    </div>
  ) 
}
