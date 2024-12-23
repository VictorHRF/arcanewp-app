import { characterHorizontalWallpapers } from '../data/horizontalWallpapers'

export const getHorizontalWallpapersByCharacter = ( character ) => {

    return characterHorizontalWallpapers.filter( temp => temp.character === character)
}