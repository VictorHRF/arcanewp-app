import React from 'react'
import { BoxContainer } from './BoxContainer'
import { Link, Outlet } from 'react-router-dom'
import { personajes } from '../data/personajes'
import { TituloSeccion } from './TituloSeccion'
import { PersonajeCard } from './PersonajeCard'

export const GridPersonajes = () => {

  const characters = personajes;

  return (
    <div className='seccion'>
      
      <TituloSeccion title={"Lista de Personajes"} />

      <section className='cuadricula'>
          {
            characters.map( p => (
                <Link key={p.id} to={`/personajes/${p.id}`}>
                  <PersonajeCard nombre={p.nombre} img={p.imagen} />
                </Link>
              )
            )
          }
        </section>
    </div>
  )
}
