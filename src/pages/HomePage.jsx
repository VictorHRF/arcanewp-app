import React from 'react'

export const HomePage = () => {
  return (
    <section className='hero'>
      
      <div className='hero-content'>
          <img className='jinx-img' src="/images/jinx-character.png" alt="Jinx Personaje" /> 
          <div className='hero-text'>
            <img className='arcanelogo' src="/images/ArcaneLogo.webp" alt="Arcane Logo" />
            <h1 className='h-titulo'>WallPapers</h1>
          </div>
          <img className='vi-img' src="/images/vi-character.png" alt="Vi Personaje" />
      </div>

      <div className='creditos'>
        <p className='credit-info'>Desarrollado por <a href="./">Victor Rodriguez.</a></p>
        <p className='credit-info'>Basado en la serie de Netflix <a href="./">Arcane.</a></p>
      </div>
        
    </section>
  )
}
