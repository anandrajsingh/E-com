import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function registerUser(e){
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    await signUp(data.get("email"), data.get("password"), data.get("name"));
    navigate("/login");
  }

  return (
    <Container component={"main"} maxWidth="xs">
      <CssBaseline />
      <Box sx={{mt: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component={"h1"} variant="h5">
          Sign Up
        </Typography>
        <Box component={"form"} sx={{mt: 3}} onSubmit={registerUser}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField autoComplete="given-name" name="name" id="name" autoFocus label="Name" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField autoComplete="email" name="email" id="email" label="Email" type="email" fullWidth required/>
            </Grid>
            <Grid item xs={12}>
              <TextField autoComplete="new-password" name="password" id="password" label="Password" type="password" fullWidth required/>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>Register</Button>
          <Grid container justifyContent={"flex - end"}>
            <Grid item>
              <Link variant="body2" href="/login">
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
