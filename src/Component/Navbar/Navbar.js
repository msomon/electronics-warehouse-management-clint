
import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <Link to='/home'>Home</Link>
      <Link to='/manageinventory'>Manage Inventory</Link>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default Navbar;