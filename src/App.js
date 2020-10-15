import { Container, Grid } from "@material-ui/core";
import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Container maxWidth="sm">
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Homepage} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </Grid>
      </Container>
    </AuthProvider>
  );
}

export default App;
