import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

//Interface for each Platform
//Add slug property for Platforms (response property)

//23 add selectedPlatform as parameter
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//Add parent_platforms
//13-add metacritic property
export interface Game {
  id: number;
  name: string;
  background_image: string; //every Game has a background image -> src for GameCard
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
//27-ordering
//31- add search parameter

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
