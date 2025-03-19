import React from 'react'

export const CharacterCard = ({character, img, alt}) => {
  return (
      <img className='episode-image' src={`/images/characters/${character}/${img}`} alt={alt} loading="lazy" />
  )
}
