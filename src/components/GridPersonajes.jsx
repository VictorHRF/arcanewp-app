import React from 'react'
import { Link } from 'react-router-dom'
import { personajes } from '../data/personajes'
import { TituloSeccion } from './TituloSeccion'
import { PersonajeCard } from './PersonajeCard'

export const GridPersonajes = () => {

  const characters = personajes;

  return (
    <section className='seccion'>
      
      <TituloSeccion title={"Selecciona un personaje.."} />

      <div className='characters-grid'>
          {
            characters.map( (p, index) => (
                <Link 
                  className='character-card' 
                  key={p.id} 
                  to={`/personajes/${p.id}/pc`}
                  style={{
                    opacity: 0,
                    animation: `fadeInUp 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.12}s`
                }}>
                  <PersonajeCard nombre={p.nombre} img={p.imagen} />
                </Link>
              )
            )
          }
        </div>

    </section>
  )
}
