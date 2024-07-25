import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Paper, Box,Divider,IconButton } from '@mui/material';
import { Add, Edit } from '@mui/icons-material';
import EditDetails from '../components/FormUserEdit'


const user = [
  { id: 1, name: 'John Doe', place: 'New York', gender: 'male', details: 'More details about John Doe.' },
  { id: 2, name: 'Jane Smith', place: 'Los Angeles', gender: 'female', details: 'More details about Jane Smith.' },
  // Add more users as needed
];

const UserDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
// //   const user = users.find((user) => user.id === parseInt(id));

//   if (!user) {
//     return <Typography variant="h6">User not found</Typography>;
//   }

    const [open,setOpen] =useState(false)

const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false)
  }

const user = {
    name: 'John Doe',
    fatherName: 'Richard Doe',
    motherName: 'Jane Doe',
    surname: 'Doe',
    dob: '1990-01-01',
    mahallu: 'Mahallu Name',
    place: 'New York',
    district: 'Manhattan',
    state: 'New York',
    phone: '123-456-7890',
    problem: 'Some problem description Some problem descriptionSome problem description Some problem descriptionSome problem descriptionSome problem description',
    solutions: 'Some solutions description dfgdsfagf egerfgefrgr rtreyt ytertert tertreh rtreyy rtyertyt yeyet',
    description: 'Detailed description about the user use rifai shad i shakir fasi jsaj .'
  };

  return (
    <Container sx={{ mt: 4 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
    
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
       
          <Typography variant="body2">Name</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{user.name}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
                <Grid item xs={12} sm={6}>
          <Typography variant="body2">Father's Name</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{user.name}</Typography> 
                 </Grid>
                 <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Mother's Name</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{user.motherName}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Surname</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{user.surname}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Date of birth</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{user.dob}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Mahallu</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{user.mahallu}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Place</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{user.place}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">District</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{user.district}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">State</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{user.state}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Phone</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{user.phone}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12}>
          <Typography variant="body2">Problem</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'black' }}>{user.problem}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12}>
          <Typography variant="body2">Solutions</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'black' }}>{user.solutions}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12}>
          <Typography variant="body2">Description</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'black' }}>{user.description}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <IconButton onClick={handleOpen} sx={{ m: 1 }}>
            <Edit />
            </IconButton>
            
          </Grid>
      </Grid>
    </Paper>

{/* ================================================================= */}


<EditDetails open={open} onClose={handleClose}/>






  </Container>
  );
};

export default UserDetails;