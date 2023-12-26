import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import ProductsList from "./components/productsList";
import Categories from "./components/categories";
import { useState } from "react";

function App() {
  const [selectedCriteria, setSelectedCriteria] = useState("All");

  // console.log("selectedCriteria  ", selectedCriteria);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <Categories
              selectedCriteria={(selectedCriteria) =>
                setSelectedCriteria(selectedCriteria)
              }
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <ProductsList selectedCriteria={selectedCriteria} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
