import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

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
//13 add CriticScore component with score={game.metacritic}

//34- move the Heading after HStack
//add marginBottom to the HStack

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
