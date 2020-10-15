import { TextField, InputAdornment, Button, Paper } from "@material-ui/core";
import { LockOutlined, EmailOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import background from "../assets/wave.svg";
import image from "../assets/Startup.svg";
import firebase from "../firebase/firebase";
import { Link, useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignIn = async (e) => {
    const { email, password } = values;
    e.preventDefault();
    try {
      await firebase.signIn(email, password);
      history.push("/");
    } catch (err) {
      console.error("Auth error", err);
      alert(err.message);
    }
  };

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await firebase.signInWithGoogle();
      history.push("/");
    } catch (err) {
      console.error("Auth error", err);
      alert(err.message);
    }
  };

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
      <form noValidate onSubmit={handleSignIn}>
        <h2 style={{ margin: 0, marginBottom: "8px" }}>Sign In</h2>
        <img src={image} alt="pic" width="100%" height="180px" />
        <TextField
          required
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
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
          onClick={handleSignInWithGoogle}
        >
          Sign in with Google
        </Button>
        <p style={{ margin: "8px 0 0 0", fontSize: "14px" }}>Forgot password</p>
        <p style={{ margin: 0, fontSize: "14px" }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </Paper>
  );
};

export default SignIn;
