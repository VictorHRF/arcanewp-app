import { episodeImages } from '../data/episodeImages';

export const getImagesByEpisode = (season, episode) => {

 return episodeImages.filter( temp => temp.season === Number(season) && temp.episode === Number(episode) );
}