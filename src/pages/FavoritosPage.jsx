import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css"
import { Download } from 'yet-another-react-lightbox/plugins';

import { Encabezado } from '../components/Encabezado'
import { TituloSeccion } from '../components/TituloSeccion'
import { favoriteWallpapers } from '../data/favoriteWallpapers'
import { FadeInGridHorizontal } from '../components/FadeInGridHorizontal';
import BotonSubir from '../components/BotonSubir';


export const FavoritosPage = () => {

const [index, setIndex] = useState(-1);

  return (
    <>
      <Encabezado titulo={"Favoritos"} />

      <section className='seccion'>
        <TituloSeccion title={'Fondos favoritos'} />

          <FadeInGridHorizontal>

            {
              favoriteWallpapers.map( fav => (
                <a className='horizontal-image-container' key={fav.id} onClick={() => setIndex(fav.id.split('fav')[1])} >
                  <img className='image-bg' src={`/images/${fav.url}`} alt={fav.alt} />
                </a>
              ))
            }
          </FadeInGridHorizontal>

        <Lightbox
          open={index !== -1}
          index={index}
          controller={ {closeOnBackdropClick: true, closeOnPullDown: true} }
          close={() => setIndex(-1)}
          slides={favoriteWallpapers.map( p => ({ src: `/images/${p.url}`, alt: p.alt, download: `/images/${p.url}?download` }) )}
          plugins={[Download]}
        />
        
      </section>
      <BotonSubir />
    </>
  )
}
