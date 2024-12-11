import { temporadas } from '../data/episodios'

export const getEpisodesBySeason = ( season ) => {

    return temporadas.find( temp => temp.num_temporada === season );
}