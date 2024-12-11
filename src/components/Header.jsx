import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/engranesvg.svg';

export const Header = () => {

  return (
    <>
        <div className='top'></div>
        <nav className='background'>
            <div className='header'>
              <div className='enlaces'>
                <Link
                  to="/"
                >
                    <img className='arcane-logo' src='src/assets/Arcane_logo_icon.webp' />
                </Link>

                <NavLink
                  className={ ({isActive}) => `enlace ${ isActive ? 'active' : ''}` }
                  to="/personajes"
                >
                    Personajes
                </NavLink>

                <NavLink
                  className={ ({isActive}) => `enlace ${ isActive ? 'active' : ''}` }
                  to="/episodios"
                >
                    Capitulos
                </NavLink>

                <NavLink
                  className={ ({isActive}) => `enlace ${ isActive ? 'active' : ''}` }
                  to="/favoritos"
                >
                    Favoritos
                </NavLink>
              </div>

              <img className='logo' src={logo} /> 
            </div>            

        </nav>
        
    </>
  )
}
