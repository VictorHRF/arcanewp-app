import React from 'react'
import { Link } from 'react-router-dom'
import { personajes } from '../data/personajes'
import { TituloSeccion } from './TituloSeccion'
import { PersonajeCard } from './PersonajeCard'

export const GridPersonajes = () => {

  const characters = personajes;

  return (
    <section className='seccion'>
      
      <TituloSeccion title={"Lista de Personajes"} />

      <div className='characters-grid'>
          {
            characters.map( p => (
                <Link key={p.id} to={`/personajes/${p.id}/pc`}>
                  <PersonajeCard nombre={p.nombre} img={p.imagen} />
                </Link>
              )
            )
          }
        </div>

    </section>
  )
}
