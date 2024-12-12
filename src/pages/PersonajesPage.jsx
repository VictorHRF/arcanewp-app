import React from 'react'
import { Encabezado, GridPersonajes } from '../components'
import { Outlet, useMatch } from 'react-router-dom';

export const PersonajesPage = () => {

  const match = useMatch("/personajes/:nombre");

  return (
    <>

      <Encabezado titulo={"Personajes"} />
      {
        match ? <Outlet /> : <GridPersonajes />
      }

    </>
  ) 
}
