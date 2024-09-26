import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

//19- remove the width of 300px of Box

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
