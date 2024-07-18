import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
// import EditDetails from './pages/EditDetails';
function App() {
  return (
   <>

 <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/user-details' element={<UserDetails/>}/>
 {/* <Route path='/profile' element={<EditDetails/>}/> */}

 </Routes>
   </>
  );
}

export default App;
