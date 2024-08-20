import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //mobile
        lg: `"nav nav" "aside main"`, //1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Show only above the lg breakpoint */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
