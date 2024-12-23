import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/engranesvg.svg';

export const Navbar = () => {

  return (
    <>
        <nav className='header-border'>
            <div className='nav-bar'>
              <div className='enlaces'>
                <Link
                  to="/"
                >
                    <img className='arcane-logo' src='/src/assets/Arcane_logo_icon.webp' />
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
                    Episodios
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
