import "./login.css";
import logo from "../../images/logo.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import React, { useContext, useState } from "react";
import BaseUrl from "../../api/BaseUrl";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const [failed, setFailed] = useState(false);

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await BaseUrl.post("/auth/login", {
        email: credentials.email,
        password: credentials.password,
      });

      // console.log(res);

      if (res.data.user) {
        document.cookie = res.data.token;
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data,
        });
        // console.log(res.data.user);
        navigate(`/user/${res.data.user.id}`);
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "you are not allowed" },
        });
      }
    } catch (err) {
      setFailed(true);
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <div className="register">
      <div className="navbar">
        <div className="left">
          <Link to={"/"}>
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="right">
          <Link to={"/login"}>
            <div className="login">Login</div>
          </Link>
          <Link to={"/register"}>
            <div className="Register">Register</div>
          </Link>
        </div>
      </div>

      <div className="form">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClick}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to={"/"}>Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link to={"/register"}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Login;
