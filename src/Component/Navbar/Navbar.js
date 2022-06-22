
import React from 'react';
import './Navbar.css'

import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user]= useAuthState(auth)
  const logout = () => {
    signOut(auth);
  }
  // console.log(user);
  return (
    <div className='navbar'>
      <div className='name'>
        <h2 >Somon Electronics</h2>
      </div>
      <div className='link'>
      <Link to='/home'>Home</Link>
      {
        user && <>
        <Link to='/manageinventory'>Inventory</Link>
        <Link to='/myitems'>My Items</Link>
        <Link to='/additems'>Add Items</Link>
        
        </>

      }
      <Link to='/blogs'>Blogs</Link>
      {
        user?.uid ? <button className='logout' onClick={logout}>Logout</button>
        :
            <Link to='/login'>Login</Link>

      }
      {
        user && <li>{user.email}</li>
      }
      
      </div>
    </div>
  );
};

export default Navbar;