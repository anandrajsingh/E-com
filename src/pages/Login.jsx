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
import { useTheme } from "@mui/material";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const theme = useTheme();
    const { signIn } = useAuth();
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        const { email, password } = event.target;
        await signIn(email.value, password.value);
        navigate("/");
    }
    return (
        <Container component="main" maxWidth="x5">
            <CssBaseline />
            <Box sx={{ mt: theme.spacing(8), display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar sx={{ m: 1, backgroundColor: theme.palette.secondary.main }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form onSubmit={login} sx={{ width: "100%", mt: 1 }}>
                    <TextField label="E-mail" variant="outlined" margin="normal" required fullWidth id="email" name="email" type="email" autoFocus autoComplete="off" />
                    <TextField label="Password" variant="outlined" margin="normal" required fullWidth id="password" name="password" type="password" autoFocus autoComplete="current-password" />
                    <Button type="submit" variant="contained" fullWidth color="primary" sx={{ margin: theme.spacing(3, 0, 2) }}>
                        Sign In
                    </Button>
                </form>
                <Grid container justifyContent={"flex - end"}>
                    <Grid item>
                        <Link variant="body2" href="/register">
                            New user? Sign Up
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
