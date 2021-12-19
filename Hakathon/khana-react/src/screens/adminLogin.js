import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth, signInWithEmailAndPassword } from "../configs/Firebase";
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import image from "../images/LogoKhanaSabkliye-01.png"
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        Admin Panel
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
export default function SignIn() {
  const [Email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const history = useHistory()
  const SignIN = (event) => {
    event.target.innerText = 'Signing In...'
    signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        event.target.innerText = 'SIGN In'
        history.push('/adminpanelpendingrequests')
      })
      .catch((error) =>alert(error.message),setTimeout(()=>event.target.innerText = 'SIGN In',1000));
  };

  return (
      <ThemeProvider theme={theme} >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: "#f9f9f9",
              padding: "1rem 1rem 1rem 1rem",
              borderRadius: '2rem',
            }}
          >
              <img style={{ width: 170 }} src={image} alt="F" />
            <Typography component="h1" variant="h5">
            Admin Panel Login
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
                value={Email}
                onChange={(ev) => setEmail(ev.target.value) }
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
                value={password}
                onChange={(ev) => setpassword(ev.target.value) }
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={SignIN}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
  );
}