import React from 'react'
import { getEpisodesBySeason } from '../helpers';
import { EpisodeCard } from './EpisodeCard';
import { TituloSeccion } from './TituloSeccion';
import { Link } from 'react-router-dom';

export const GridEpisodes = () => {
  
  const { episodios : temp1 } = getEpisodesBySeason( 1 );
  const { episodios : temp2 } = getEpisodesBySeason( 2 );

  return (

      <section className='seccion'>
        <TituloSeccion title={"Temporada 1"} />

        <div className='episodes-grid'>
          {
            temp1.map( ep => (
              <Link className='episode-container' key={ep.id} to={`/episodios/${ep.id}`}>
                <EpisodeCard key={ep.id} {...ep} />
              </Link>
              )
            )
          }
        </div>
        <TituloSeccion title={"Temporada 2"} />
        <div className='episodes-grid'>
          {
            temp2.map( ep => (
              <Link className='episode-container' key={ep.id} to={`/episodios/${ep.id}`}>
                <EpisodeCard key={ep.id} {...ep} />
              </Link>
              )
            )
          }
        </div>
      </section>
  )
}
