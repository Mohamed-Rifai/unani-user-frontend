import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button,TextField,IconButton } from '@mui/material';
import {Add,Search} from '@mui/icons-material'
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'John Doe', place: 'New York', gender: 'male' },
  { id: 2, name: 'Jane Smith', place: 'Los Angeles', gender: 'female' },
  { id: 1, name: 'John Doe', place: 'New York', gender: 'male' },
  { id: 2, name: 'Jane Smith', place: 'Los Angeles', gender: 'female' }, { id: 1, name: 'John Doe', place: 'New York', gender: 'male' },
  { id: 2, name: 'Jane Smith', place: 'Los Angeles', gender: 'female' }, { id: 1, name: 'John Doe', place: 'New York', gender: 'male' },
  { id: 2, name: 'Jane Smith', place: 'Los Angeles', gender: 'female' },
  // Add more users as needed
];

const HomePage: React.FC = () => {

  const [open, setOpen] = useState(false);
  const [searchTerm,setSearchTerm] = useState('')


const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(e.target.value);
};

const handleAddUserClick = () => {
  setOpen(true);
};

const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (

    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
      <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Search Users"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <Search />
              ),
            }}
          />
        </Grid>

        <Grid item>
          <IconButton color="primary" onClick={handleAddUserClick}>
            <Add />
          </IconButton>
        </Grid>



        </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {filteredUsers.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <Card sx={{ padding: 2 }}>
              <CardContent sx={{ textAlign: 'center', padding: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.place}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                  size="small"
                  component={Link}
                  to={`/user/${user.id}`}
                  variant="contained"
                  color="primary"
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>







        {/* {users.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <Card sx={{ padding: 2 }}>
              <CardContent sx={{ textAlign: 'center', padding: 1 }}>
                <Typography variant="h6" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.place}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" component={Link} to={`/user/${user.id}`} variant="contained" color="primary">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </Container>
  );
};

export default HomePage;
