import React from 'react'
import { useState } from 'react';
import { Download } from 'yet-another-react-lightbox/plugins';
import { useParams } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css"
import { getHorizontalWallpapersByCharacter } from '../helpers'
import { TituloSeccion } from './TituloSeccion';
import { CharacterCard } from './CharacterCard';

export const GridHorizontal = () => {

    const [index, setIndex] = useState(-1);
    const { personajeId } = useParams();
    const wallpapers = getHorizontalWallpapersByCharacter(personajeId);
     
    return (
        <section className='seccion'>
            
            <TituloSeccion title={"Fondos Horizontales"} />
        
            <div className='grid-horizontal-container'>
                {
                    wallpapers.map( p => (
                        <a className='horizontal-image-container' key={p.id} onClick={() => setIndex( parseInt(p.id.match(/\d+/) ))} >
                            <CharacterCard character={personajeId} img={p.name} alt={p.alt} />
                        </a>
                        )
                    )
                }
            </div>

            <Lightbox
                open={index !== -1}
                index={index}
                controller={ {closeOnBackdropClick: true, closeOnPullDown: true} }
                close={() => setIndex(-1)}
                slides={wallpapers.map( p => ({ src: `/images/characters/${personajeId}/${p.name}`, alt: p.alt, download: `/images/characters/${personajeId}/${p.name}?download` }) )}
                plugins={[Download]}
            />
        </section>
    )
}
