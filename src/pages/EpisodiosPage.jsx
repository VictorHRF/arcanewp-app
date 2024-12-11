import React from 'react'
import { Encabezado } from '../components'
import { GridEpisodes } from '../components/GridEpisodes'

export const EpisodiosPage = () => {

  return (
    <>
      <Encabezado titulo={"Episodios"} />
      <div className='seccion'>
        <GridEpisodes season={1} />
      </div>
      
    </>
  )
}
