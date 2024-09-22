import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

// We replace <ul> with <SimpleGrid>
// We replace <li> with <GameCard>
// We replace the number of columns ={3} with a responsive layout, with an object
// We need a padding, because the GameCard is too close to the edge

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
