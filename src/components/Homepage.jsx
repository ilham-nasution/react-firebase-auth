import React from "react";
import { Button } from "@material-ui/core";
import firebase from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

const Homepage = () => {
  const user = useAuth();

  return (
    <div>
      <h1>Homepage</h1>
      <h3>{user && user.displayName}</h3>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => firebase.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default Homepage;
