import React from 'react'
import { Encabezado } from '../components/Encabezado'
import { GridEpisodes } from '../components/GridEpisodes'
import { Outlet, useMatch } from 'react-router-dom';

export const EpisodiosPage = () => {
  
  const match = useMatch("/episodios" );

  return (
    <>
      <Encabezado titulo={"Episodios"} />
      {
        match ? <GridEpisodes /> : <Outlet />
      }
      
    </>
  )
}
