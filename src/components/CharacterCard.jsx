import React from 'react'

export const CharacterCard = ({character, img, alt}) => {
  return (
    <div className='character-card'>
        <img className='personaje-img' src={`/src/images/characters/${character}/${img}`} alt={alt} loading="lazy" />
    </div>
  )
}
