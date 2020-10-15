import { TextField, InputAdornment, Button, Paper } from "@material-ui/core";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutlineOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import background from "../assets/wave.svg";
import image from "../assets/Startup.svg";
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase/firebase";

const SignUp = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    username: "",
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

  const handleSignUp = async (e) => {
    const { username, email, password } = values;
    e.preventDefault();
    try {
      await firebase.register(username, email, password);
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
      <form onSubmit={handleSignUp}>
        <h2 style={{ margin: 0, marginBottom: "8px" }}>Sign Up</h2>
        <img src={image} alt="pic" width="100%" height="180px" />
        <TextField
          required
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          label="Username"
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
          Sign Up
        </Button>

        <p style={{ marginBottom: 0, fontSize: "14px" }}>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </Paper>
  );
};

export default SignUp;
