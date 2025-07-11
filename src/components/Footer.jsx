import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <p>© 2025 Víctor Rodríguez. Fondos de Pantalla Arcane.</p>
        <p>
            Este sitio no tiene fines comerciales y no está afiliado con Riot Games ni Netflix. Las imágenes utilizadas pertenecen a sus respectivos dueños. 
            <em> Arcane </em> y sus personajes son marcas registradas de Riot Games y Netflix.
        </p>

        <p>
            Para más información o contacto profesional, visita:{" "}
            <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
            >
            GitHub
            </a>{" "}
            |{" "}
            <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
            >
            LinkedIn
            </a>
        </p>
        
        <p>
            <Link to="/terminos" className="underline hover:text-gray-300">Términos de uso</Link> |{" "}
            <Link to="/privacidad" className="underline hover:text-gray-300">Aviso de privacidad</Link> |{" "}
            <Link to="/creditos" className="underline hover:text-gray-300">Créditos</Link>
        </p>
    </footer>
  )
}
