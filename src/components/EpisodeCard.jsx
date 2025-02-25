import React from 'react'

export const EpisodeCard = ({id, num_capitulo, titulo, descripcion, duracion, imagen_portada}) => {
    return (
        <div className='episode-card'>
          <img className='episode-img' src={`/images/episodes/${imagen_portada}`} alt={titulo} />

          <div className='episode-info'>
            <div className='hover-box"'>
              <p className='subtitulo'> { titulo } </p>
              <p className='second-text'>Episodio { num_capitulo }</p>
            </div>
            <p className='hidden-paragraph'> { descripcion } </p>
          </div>
        </div>
      )
}
