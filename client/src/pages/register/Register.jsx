import "./register.css";
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
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import React, { useContext, useState } from "react";
import BaseUrl from "../../api/BaseUrl";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [failed, setFailed] = useState(false);
  const [info, setInfo] = useState({
    first_name: undefined,
    middle_name: undefined,
    last_name: undefined,
    email: undefined,
    password: undefined,
    gender: undefined,
  });

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (info.first_name === undefined) {
      return alert("first name Not be empty");
    } else if (info.last_name === undefined) {
      return alert("Last Name Not Be Empty");
    } else if (info.password === undefined) {
      return alert("Password must not be empty");
    } else if (info.email === undefined) {
      return alert("Email must not Be Empty");
    } else if (info.gender === undefined) {
      return alert("Gender not Be Empty");
    } else {
      // console.log({ info: info });

      try {
        const res = await BaseUrl.post("/auth/register", info);

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data,
        });
        // console.log(res);
        navigate(`/newuser/${res.data.data.id}`);
      } catch (err) {
        return setFailed(true);
      }
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
              Sign up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="first name"
                    required
                    fullWidth
                    id="first_name"
                    label="First Name"
                    autoFocus
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="gender"
                    label="Gender"
                    name="gender"
                    autoComplete="male"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClick}
              >
                Sign Up
              </Button>
              {failed && (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity="error">Please Submit Different Email</Alert>
                </Stack>
              )}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={"/login"}>Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Register;
