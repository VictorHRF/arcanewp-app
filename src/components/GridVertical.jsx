import React, { useState } from 'react'
import { CharacterCard } from './CharacterCard'
import {  TituloSeccion } from './TituloSeccion'
import { getVerticalWallpaperByCharacter } from '../helpers/getVerticalWallpaperByCharacter'
import { Link, useParams } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import { Download } from 'yet-another-react-lightbox/plugins';


export const GridVertical = () => {

  const [index, setIndex] = useState(-1);
  const { personajeId } = useParams();
  const wallpapers = getVerticalWallpaperByCharacter(personajeId);
    
  return (
    <section className='seccion'>
          
          <TituloSeccion title={"Fondos verticales"} />
    
          <div className='grid-vertical-container'>
              {
                wallpapers.map( p => (
                  <Link key={p.alt} onClick={() => setIndex(p.alt.split(' ')[1])}>
                    <CharacterCard key={ p.alt } character={personajeId} img={p.name} alt={p.alt} />
                  </Link>
                  )
                )
              }
            </div>

            <Lightbox
                open={index !== -1}
                index={index}
                controller={ {closeOnBackdropClick: true, closeOnPullDown: true} }
                close={() => setIndex(-1)}
                slides={wallpapers.map( p => ({ src: `/src/images/characters/${personajeId}/${p.name}`, alt: p.alt, download: `/src/images/characters/${personajeId}/${p.name}?download` }) )}
                plugins={[Download]}
            />
        </section>
  )
}
