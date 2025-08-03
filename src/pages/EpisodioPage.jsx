import { useState } from 'react'
import { useParams } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css"
import { Download } from 'yet-another-react-lightbox/plugins';

import { TituloSeccion } from '../components/TituloSeccion'
import { getImagesByEpisode } from '../helpers/getImagesByEpisode';
import { EpisodeSelector } from '../components/EpisodeSelector';

export const EpisodioPage = () => {

  const [index, setIndex] = useState(-1);
  const { seasonId } = useParams();
  const [season, episode] = seasonId.split('E');
  const images = getImagesByEpisode(season.substring(1,), episode);

  return (
    <section className='seccion'>
      <EpisodeSelector />
      <TituloSeccion title={`Temporada ${season.substring(1,)} - Episodio ${episode}`} />

      <div className='grid-horizontal-container'>
        {
          images.map( img => (
            <a className='horizontal-image-container' key={img.id} onClick={() => setIndex(img.id.split('-')[1]-1)}>
              <img className='image-bg' src={`/images/${img.url}`} alt={img.alt} />
            </a>
          ))
        }
      </div>

      <Lightbox
          open={index !== -1}
          index={index}
          controller={ {closeOnBackdropClick: true, closeOnPullDown: true} }
          close={() => setIndex(-1)}
          slides={images.map( p => ({ src: `/images/${p.url}`, alt: p.id, download: `/images/${p.urlDownload}?download` }) )}
          plugins={[Download]}
      />


    </section>
  )
}
