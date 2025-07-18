import React from 'react'
import { temporadas } from '../data/episodios'
import { NavLink } from 'react-router-dom';
import { getEpisodesBySeason } from '../helpers';

const episodios = temporadas.map( t => t.episodios ).flat();

export const EpisodeSelector = () => {
  return (
    <>
        <div className='character-selector-container'>
            {
                episodios.map( e => (
                    <NavLink    
                        className={({isActive}) => `character-selector ${ isActive ? 'character-active' : ''}`}
                        key={e.id} 
                        to={`/episodios/${e.id}`}
                    >
                        <p>{e.id}</p>
                    </NavLink>
                ))
            }
     </div>
    </>
    
  )
}
