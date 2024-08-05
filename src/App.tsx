import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import Navbar from './components/Navbar';

// import EditDetails from './pages/EditDetails';
function App() {
  return (
   <>  
  
 <ToastContainer/>
 <Routes>

 <Route path='/login' element={<Login/>}/>  
 <Route path='/' element={<Home/>}/>
 <Route path='/user-details/:id' element={<UserDetails/>}/>
 {/* <Route path='/profile' element={<EditDetails/>}/> */}

 </Routes>
   </>
  );
}

export default App;
