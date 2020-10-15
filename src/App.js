import { Container, Grid } from "@material-ui/core";
import React from "react";
import Signin from "./components/Signin";

function App() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Signin />
      </Grid>
    </Container>
  );
}

export default App;
