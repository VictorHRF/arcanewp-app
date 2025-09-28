import React from 'react'
import { Encabezado } from '../components/Encabezado'
import { GridEpisodes } from '../components/GridEpisodes'
import { Outlet, useMatch } from 'react-router-dom';
import BotonSubir from '../components/BotonSubir';

export const EpisodiosPage = () => {
  
  const match = useMatch("/episodios" );

  return (
    <>
      <Encabezado titulo={"Episodios"} />
      {
        match ? <GridEpisodes /> : <Outlet />
      }
      <BotonSubir />
      
    </>
  )
}
