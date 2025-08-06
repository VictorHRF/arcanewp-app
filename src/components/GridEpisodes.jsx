import React from 'react'
import { getEpisodesBySeason } from '../helpers';
import { EpisodeCard } from './EpisodeCard';
import { TituloSeccion } from './TituloSeccion';
import { Link } from 'react-router-dom';
import { FadeInGrid } from './FadeInGrid';

export const GridEpisodes = () => {
  
  const { episodios : temp1 } = getEpisodesBySeason( 1 );
  const { episodios : temp2 } = getEpisodesBySeason( 2 );

  return (

      <section className='seccion'>
        <TituloSeccion title={"Temporada 1"} />
        <FadeInGrid>        
          {
            temp1.map( (ep, index) => (
              <Link 
                className='episode-container' 
                key={ep.id} 
                to={`/episodios/${ep.id}`}>
                <EpisodeCard key={ep.id} {...ep} />
              </Link>
              )
            )
          }
        </FadeInGrid>
        <TituloSeccion title={"Temporada 2"} />
        <FadeInGrid>
          {
            temp2.map( ep => (
              <Link className='episode-container' key={ep.id} to={`/episodios/${ep.id}`}>
                <EpisodeCard key={ep.id} {...ep} />
              </Link>
              )
            )
          }
        </FadeInGrid>
      </section>
  )
}
