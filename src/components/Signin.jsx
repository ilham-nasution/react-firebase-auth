import { TextField, InputAdornment, Button, Paper } from "@material-ui/core";
import { LockOutlined, PersonOutlineOutlined } from "@material-ui/icons";
import React, { useRef } from "react";
import background from "../assets/wave.svg";
import image from "../assets/Startup.svg";

const Signin = () => {
  const email = useRef();
  const password = useRef();

  return (
    <Paper
      elevation="2"
      style={{
        padding: "24px",
        textAlign: "center",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <form noValidate>
        <h1>Sign In</h1>
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "16px" }}
        >
          Sign In
        </Button>
        <p>Don't have an account? Sign Up</p>
      </form>
    </Paper>
  );
};

export default Signin;
