import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

//To get round corners on the top of GameCard, we use overflow="hidden"
//In chakra documentation, we have the font size properties, like 2xl (2 x large)
//We don't want 3 columns also on mobile devices -> GameGrid
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
