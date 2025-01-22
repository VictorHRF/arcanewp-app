import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Arcane } from '../Arcane';
import { PersonajesPage, EpisodiosPage, FavoritosPage, HomePage, PersonajePage, EpisodioPage } from '../pages'
import { PcWallpapers } from '../components/PcWallpapers'
import { MobileWallpapers } from '../components/MobileWallpapers'


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
            path: "/personajes/",
            element: <PersonajesPage />,
            children: [
              {
                path: ":personajeId/",
                element: <PersonajePage />,
                children: [
                  {
                     path: "mobile",
                     element: <MobileWallpapers />
                  },
                  {
                     path: "pc",
                     element: <PcWallpapers />
                  },
                ]
              }
            ]
          },
          {
            path: "/episodios",
            element: <EpisodiosPage /> ,
            children: [
              {
                path: ":seasonId",
                element: <EpisodioPage />
              }
            ]
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
