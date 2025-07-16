import { personajes } from '../data/personajes';
import { NavLink } from 'react-router-dom';

export const CharacterSelector = ( { dispositivo } ) => {
  return (
    <div className='character-selector-container'>
        {
            personajes.map( p => (
                <NavLink
                    className={({isActive}) => `character-selector ${ isActive ? 'character-active' : ''}`}
                    key={p.id} 
                    to={`/personajes/${p.id}/${dispositivo}`}
                    >
                    <p>{p.nombre}</p>
                </NavLink>
            ))
        }

    </div>
  )
}
