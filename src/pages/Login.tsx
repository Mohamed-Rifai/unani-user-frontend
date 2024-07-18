import React,{ useState } from "react";
import {useNavigate} from 'react-router-dom'
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

import { Link } from "react-router-dom";
    


const Login: React.FC = () => {

    const [email,setEmail] = useState<String>('')
    const [password,setPassword] = useState<String>('')
    const navigate = useNavigate()


    const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
       console.log('helloo');
       navigate('/')
       
        
        
    }
  return (
    <>
    <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Login</Typography>
          <form onSubmit={handleSubmit}>
          <Box sx={{ mt: 1 }}>
           
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              aria-required
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              aria-required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Login
            </Button>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Link to="/edit-password">Forgot password? </Link>
              </Grid>
            </Grid>
          </Box>
          </form>
        </Box>
      </Container>
    </>
  )
}

export default Login
