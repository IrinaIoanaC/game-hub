import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

//11
//To get round corners on the top of GameCard, we use overflow="hidden"
//In chakra documentation, we have the font size properties, like 2xl (2 x large)
//We don't want 3 columns also on mobile devices -> GameGrid

//12
// We want to display Platforms for every game;
//Firstly, we render <Text> of Platforms for each game
//To return the icons, we need to instal npm i react-icons@4.7.1
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
