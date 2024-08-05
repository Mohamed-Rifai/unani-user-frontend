import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button,TextField,IconButton ,Tooltip} from '@mui/material';
import {Add,Search} from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import AddUser from '../components/AddUser';
import axios from '../axios'
import emptyFolderImg from '../assets/icons/empty-folder.png'
import Navbar from '../components/Navbar';






interface Patient {
  _id:number;
  name:string;
  place:string;
}

const HomePage: React.FC = () => {


  const [open, setOpen] = useState(false);
  const [searchTerm,setSearchTerm] = useState('');
  const [patients,setPatients] = useState<Patient[]>([]);
  const navigate = useNavigate()

  useEffect(()=>{

    if(!localStorage.getItem('UserToken')){

      return navigate('/login')
    }

    axios.get('/patient/show-patients').then((res)=> {
      console.log(res.data);
      setPatients(res.data) 


      
    }).catch((err)=> {
      console.log(err);
      
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

 


const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(e.target.value);
  
  
};

const handleAddUserClick = () => {
  setOpen(true);
};

const handleClose = () => {

  setOpen(false)
}



const filteredUsers = patients.filter((user) =>



  user.name.toLowerCase().includes(searchTerm.toLowerCase()),

 


  
);




  return (

<>
{/* <Navbar/>  */}
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
          <IconButton color="primary" onClick={handleAddUserClick}>
            <Add />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>

    {patients.length > 0 ? (
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {filteredUsers.map((user) => (
          <Grid item key={user._id} xs={12} sm={6} md={4}>
           <Link to={`/user-details/${user._id}`} style={{ textDecoration: 'none' }}>
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
    ) : (
      <Grid container spacing={2} direction="column" alignItems="center" sx={{ mt: 4 }}>
        <Grid item>
          <img src={emptyFolderImg} alt="No Data" width="350" height="339"/>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="textSecondary">
            No data available
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleAddUserClick}>
            Add Patient
          </Button>
        </Grid>
      </Grid>
    )}

    <AddUser open={open} onClose={handleClose} />
  </Container>
  </>


















//     <Container sx={{ mt: 4 }}>


      
//       <Grid container spacing={2} justifyContent="space-between" alignItems="center">
//       <Grid item xs={12} sm={8}>
//           <TextField
//             fullWidth
//             label="Search patients"
//             variant="outlined"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             InputProps={{
//               endAdornment: (
//                 <Search />
//               ),
//             }}
//           />
//         </Grid>

//         <Grid item >
//         <Tooltip title="Add New Patient">
//           <IconButton color="primary" onClick={handleAddUserClick} >
//             <Add  />
           
//           </IconButton>
//           </Tooltip>
//         </Grid>



//         </Grid>
//       <Grid container spacing={2} sx={{ mt: 2 }} >
//         {filteredUsers.map((user) => (
//           <Grid item key={user._id} xs={12} sm={6} md={4}>



// <Link to={`/user-details/${user._id}`} style={{ textDecoration: 'none' }}> 
//       <Card sx={{ padding: 2, cursor: 'pointer' }}>
//         <CardContent sx={{ textAlign: 'center', padding: 1 }}>
//           <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>
//             {user.name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {user.place}
//           </Typography>
//         </CardContent>
        
//       </Card>
//     </Link>
         
//           </Grid>
//         ))}
//       </Grid>


// <AddUser  open={open} onClose={handleClose}/>

//     </Container>
  );
};

export default HomePage;
