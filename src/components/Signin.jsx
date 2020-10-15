import { TextField, InputAdornment, Button, Paper } from "@material-ui/core";
import { LockOutlined, PersonOutlineOutlined } from "@material-ui/icons";
import React, { useRef } from "react";
import background from "../assets/wave.svg";
import image from "../assets/Startup.svg";
import firebase from "../firebase/firebase";

const Signin = () => {
  const email = useRef();
  const password = useRef();

  return (
    <Paper
      elevation={2}
      style={{
        padding: "24px",
        textAlign: "center",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <form noValidate>
        <h2 style={{ margin: 0, marginBottom: "8px" }}>Sign In</h2>
        <img src={image} alt="pic" width="100%" height="180px" />
        <TextField
          required
          type="email"
          ref={email}
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineOutlined />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          type="password"
          ref={password}
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
        <p style={{ margin: "4px", fontSize: "12px" }}>OR</p>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<i className="fab fa-google"></i>}
          style={{ backgroundColor: "#e34134" }}
          fullWidth
          onClick={() => {
            firebase.signInWithGoogle();
          }}
        >
          Sign in with Google
        </Button>
        <p style={{ margin: "8px 0 0 0", fontSize: "14px" }}>Forgot password</p>
        <p style={{ margin: 0, fontSize: "14px" }}>
          Don't have an account? Sign Up
        </p>
      </form>
    </Paper>
  );
};

export default Signin;
