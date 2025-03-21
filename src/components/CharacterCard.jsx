import React from 'react'

export const CharacterCard = ({character, img, alt}) => {
  return (
      <img className='image-bg' src={`/images/characters/${character}/${img}`} alt={alt} loading="lazy" />
  )
}
