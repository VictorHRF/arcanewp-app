import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css"
import { Download } from 'yet-another-react-lightbox/plugins';

import { TituloSeccion } from '../components/TituloSeccion'
import { getImagesByEpisode } from '../helpers/getImagesByEpisode';

export const EpisodioPage = () => {

  const [index, setIndex] = useState(-1);
  const { seasonId } = useParams();
  const [season, episode] = seasonId.split('E');
  const images = getImagesByEpisode(season.substring(1,), episode);

  return (
    <section className='seccion'>
      <TituloSeccion title={`Temporada ${season.substring(1,)} - Episodio ${episode}`} />

      <div className='grid-horizontal-container'>
        {
          images.map( img => (
            <a key={img.id} onClick={() => setIndex(img.id.split('img')[1])}>
              <img className='episode-image' src={`/images/episodes/${img.url}`} alt={img.alt} />
            </a>
          ))
        }
      </div>

      <Lightbox
          open={index !== -1}
          index={index}
          controller={ {closeOnBackdropClick: true, closeOnPullDown: true} }
          close={() => setIndex(-1)}
          slides={images.map( p => ({ src: `/images/episodes/${p.url}`, alt: p.id, download: `/images/episodes/${p.url}?download` }) )}
          plugins={[Download]}
      />


    </section>
  )
}
