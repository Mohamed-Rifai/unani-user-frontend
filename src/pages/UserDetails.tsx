import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Paper,Divider,IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import EditDetails from '../components/FormUserEdit'
import axios from '../axios'
// import Navbar from '../components/Navbar';




interface Patiant {
  name:string;
  fatherName:string;
  motherName:string;
  surname:string;
  dob:string;
  mahallu:string;
  place:string;
  district:string;
  state:string;
  phone:string;
  problem:string;
  solutions:string;
  description:string;
  updatedAt:string;
  dayOfWeek:string;
}

const UserDetails: React.FC = () => {

   const {id}= useParams<{ id: string }>();

   const [patient,setPatient] = useState<Patiant |null>(null)
   const [open,setOpen] =useState(false)
   
   
// //   const user = users.find((user) => user.id === parseInt(id));

useEffect(()=> {
  
  axios.get(`/patient/single-patient/${id}`)
  .then((res)=> {

  console.log(res.data);
  setPatient(res.data)
  

  })
  .catch((err)=> {

    console.log(err);
    
  })
},[id])
    

const handleOpen = () => {
    setOpen(true);
   
    
  };

  const handleClose = () => {

    setOpen(false)
  }


  const formattedDate = patient ? new Date(patient.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) : '';

  return (

    <>


<>
      <Container sx={{ mt: 4 }}>
        {patient ? (
          <Paper elevation={3} sx={{ p: 4 }}>
            {/* Today's Date and Day at the Top Right */}
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Patient Details</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'gray' }}>
                {patient.dayOfWeek}, {formattedDate}
                </Typography>
              </Grid>
            </Grid>
            <Divider style={{ width: '100%', margin: '20px 0' }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">Name</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.name}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">Father's Name</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.fatherName}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">Mother's Name</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.motherName}</Typography>
              </Grid>
            </Grid>
            <Divider style={{ width: '100%', margin: '20px 0' }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">Surname</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.surname}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">Mahallu</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.mahallu}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">Place</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.place}</Typography>
              </Grid>
            </Grid>
            <Divider style={{ width: '100%', margin: '20px 0' }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">District</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.district}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">State</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.state}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">Phone</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.phone}</Typography>
              </Grid>
            </Grid>
            <Divider style={{ width: '100%', margin: '20px 0' }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body2">Problem</Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.problem}</Typography>
              </Grid>
              <Divider style={{ width: '100%', margin: '20px 0' }} />
              <Grid item xs={12}>
                <Typography variant="body2">Solutions</Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.solutions}</Typography>
              </Grid>
              <Divider style={{ width: '100%', margin: '20px 0' }} />
              <Grid item xs={12}>
                <Typography variant="body2">Description</Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.description}</Typography>
              </Grid>
              <Divider style={{ width: '100%', margin: '20px 0' }} />
              <Grid item xs={12}>
                <IconButton onClick={handleOpen} sx={{ m: -2 }}>
                  <Edit />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <Typography variant="h6">Loading...</Typography>
        )}

        <EditDetails open={open} onClose={handleClose} />
      </Container>
    </>























    {/* <Navbar/>  */}
    {/* <Container sx={{ mt: 4 }}>

      {patient ?  (
    <Paper elevation={3} sx={{ p: 4 }}>
    
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
       
          <Typography variant="body2">Name</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.name}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
                <Grid item xs={12} sm={6}>
          <Typography variant="body2">Father's Name</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.name}</Typography> 
                 </Grid>
                 <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Mother's Name</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.motherName}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Surname</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.surname}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Date of birth</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.dob}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Mahallu</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.mahallu}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Place</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.place}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">District</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.district}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">State</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.state}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">Phone</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.phone}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12}>
          <Typography variant="body2">Problem</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.problem}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12}>
          <Typography variant="body2">Solutions</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.solutions}</Typography>
        </Grid>
        <Divider style={{width:'100%'}} />
        <Grid item xs={12}>
          <Typography variant="body2">Description</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'black' }}>{patient.description}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <IconButton onClick={handleOpen} sx={{ m: 1 }}>
            <Edit />
            </IconButton>
            
          </Grid>
      </Grid>
    </Paper>
    ): 
    
    (
      <h1>loading.....</h1>
    )}

{/* ================================================================= */}


<EditDetails open={open} onClose={handleClose}/>






  {/* </Container>  */}
  </>
  );
};

export default UserDetails;