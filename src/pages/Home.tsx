import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button,TextField,IconButton ,Tooltip} from '@mui/material';
import {Add,Search} from '@mui/icons-material'
import { Link } from 'react-router-dom';
import AddUser from '../components/AddUser';




const users = [
  { id: 1, name: 'John Doe', place: 'New York', gender: 'male' },
  { id: 2, name: 'Jane Smith', place: 'Los Angeles', gender: 'female' },
  { id: 3, name: 'assd Doe', place: 'New York', gender: 'male' },
  { id: 4, name: 'Smith', place: 'Los Angeles', gender: 'female' }, { id: 5, name: 'Doe', place: 'New York', gender: 'male' },

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

const handleClose = () => {

  setOpen(false)
}



const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (

    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
      <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Search patients"
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
        <Tooltip title="Add New Patient">
          <IconButton color="primary" onClick={handleAddUserClick} >
            <Add  />
           
          </IconButton>
          </Tooltip>
        </Grid>



        </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {filteredUsers.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>



<Link to={"/user-details"} style={{ textDecoration: 'none' }}> 
      <Card sx={{ padding: 2, cursor: 'pointer' }}>
        <CardContent sx={{ textAlign: 'center', padding: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.place}
          </Typography>
        </CardContent>
        
      </Card>
    </Link>
         
          </Grid>
        ))}
      </Grid>


<AddUser  open={open} onClose={handleClose}/>

    </Container>
  );
};

export default HomePage;
