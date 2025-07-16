import React, { useState } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import { CategorySelector } from '../components/CategorySelector';
import { CharacterSelector } from '../components/CharacterSelector';

export const PersonajePage = () => {

  const { personajeId } = useParams();
  const [dispositivo, setDispositivo] = useState("pc");

  return (
    <>
      <CharacterSelector dispositivo={dispositivo} />
      <CategorySelector personajeId={personajeId} setDispositivo={setDispositivo} />
      <Outlet />
    </>
  )
}
