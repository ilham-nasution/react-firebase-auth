import { TextField, InputAdornment, Button, Paper } from "@material-ui/core";
import { LockOutlined, EmailOutlined } from "@material-ui/icons";
import React from "react";
import background from "../assets/wave.svg";
import image from "../assets/Startup.svg";
import firebase from "../firebase/firebase";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CustomInput = ({ field, form, ...props }) => {
  return (
    <TextField
      {...field}
      {...props}
      required
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

const SignIn = () => {
  const history = useHistory();

  const handleSignIn = async (values, setSubmitting, resetForm) => {
    const { email, password } = values;
    try {
      await firebase.signIn(email, password);
      history.push("/");
    } catch (err) {
      console.error("Auth error", err);
      alert(err.message);
      setSubmitting(false);
      resetForm();
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
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSignIn(values, setSubmitting, resetForm);
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <h2 style={{ margin: 0, marginBottom: "8px" }}>Sign In</h2>
            <img src={image} alt="pic" width="100%" height="180px" />

            <Field
              type="email"
              name="email"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                ),
              }}
              component={CustomInput}
            />
            <ErrorMessage name="email" component="p" className="alert" />
            <Field
              type="password"
              name="password"
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                ),
              }}
              component={CustomInput}
            />
            <ErrorMessage name="password" component="p" className="alert" />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
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
            <p style={{ margin: "8px 0 0 0", fontSize: "14px" }}>
              Forgot password
            </p>
            <p style={{ margin: 0, fontSize: "14px" }}>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default SignIn;
