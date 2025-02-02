import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import { CategorySelector } from '../components/CategorySelector';

export const PersonajePage = () => {

  const { personajeId } = useParams();

  return (
    <>
      <CategorySelector personajeId={personajeId} />
      <Outlet />
    </>
  )
}
