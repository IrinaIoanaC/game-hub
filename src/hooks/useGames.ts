import useData from "./useData";

//Interface for each Platform
//Add slug property for Platforms (response property)
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

const useGames = () => useData<Game>("/games");

export default useGames;
