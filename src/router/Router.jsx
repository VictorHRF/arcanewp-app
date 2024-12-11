import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Arcane } from '../Arcane';
import { PersonajesPage, EpisodiosPage, FavoritosPage, HomePage } from '../pages'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Arcane />,
        children: [
          {
            path: "/",
            element: <HomePage />
          },
          {
            path: "/personajes",
            element: <PersonajesPage />
          },
          {
            path: "/episodios",
            element: <EpisodiosPage /> ,
          },
          {
            path: "/favoritos",
            element: <FavoritosPage /> ,
          },
          {
            path: '*',
            element: <Navigate to={'/home'} />
        }
        ]
    }
]);

export const Router = () => {
  return <>    
    <RouterProvider router={router} />
  </>
}
