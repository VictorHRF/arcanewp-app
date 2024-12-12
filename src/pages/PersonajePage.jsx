import React from 'react'
import { useParams } from 'react-router-dom';

export const PersonajePage = () => {

  const { personajeId } = useParams();

  return (
    <div>
      <h2 className='titulo'>{personajeId}</h2>
    </div>
  )
}
