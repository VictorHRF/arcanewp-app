import { NavLink } from 'react-router-dom'

export const CategorySelector = ( { personajeId, setDispositivo } ) => {

  return (
  <div className='category-selector-container'>
    <div className='selector-dispositivo'>
      <NavLink
          className={({isActive}) => `selector-item ${ isActive ? 'seleccionado' : ''}`}
          onClick={() => setDispositivo("pc")}
          to={`/personajes/${personajeId}/pc`} >
          Horizontal
      </NavLink>
      <NavLink 
          className={({isActive}) => `selector-item ${ isActive ? 'seleccionado' : ''}`}
          onClick={() => setDispositivo("mobile")}
          to={`/personajes/${personajeId}/mobile`} >
          Vertical
      </NavLink>
    </div>
  </div>
  )
}
