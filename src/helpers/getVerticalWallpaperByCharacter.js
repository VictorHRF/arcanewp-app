import { characterVerticalWallpapers } from "../data/verticalWallpapers"

export const getVerticalWallpaperByCharacter = ( character ) => {

    return characterVerticalWallpapers.filter( temp => temp.character === character );
    
}