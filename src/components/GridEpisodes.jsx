import React from 'react'
import { BoxContainer } from './BoxContainer';
import { getEpisodesBySeason } from '../helpers';

export const GridEpisodes = ( { season } ) => {
  const temporada = getEpisodesBySeason( season );
  const { episodios } = temporada;

  return (
    <div>
      <section className='cuadricula'>
        {
          episodios.map( episodio => (
              <BoxContainer key={episodio.id} titulo={ episodio.titulo } capitulo={ episodio.num_capitulo } />
            )
          )
        }

      </section>
    </div>
  )
}
