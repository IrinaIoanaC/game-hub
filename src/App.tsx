import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

//17-Replace Aside with GenreList component
//19-Add padding to the <GridItem>

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //mobile
        lg: `"nav nav" "aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Show only above the lg breakpoint */}
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
