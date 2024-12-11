import React from 'react'
import { getEpisodesBySeason } from '../helpers'
import { BoxContainer } from './BoxContainer'

export const GridEpisodes = ( { season } ) => {

const temporada = getEpisodesBySeason( season );
const { episodios } = temporada;

  return (
    <section className='cuadricula'>
        {
          episodios.map( episodio => (
              <BoxContainer key={episodio.id} titulo={ episodio.titulo } capitulo={ episodio.num_capitulo } />
            )
          )
        }

      </section>
  )
}
