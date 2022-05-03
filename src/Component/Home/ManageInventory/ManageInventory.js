import React from 'react';
import useHooks from '../../Hooks/useHooks';
import Inventories from '../Inventories/Inventories';

const ManageInventory = () => {
  const {inventories}=useHooks()
  // console.log();


  return (
    <div>
      <h1>manage inventory </h1>
      <div className='inventories'>
        {
           inventories.map(inventory =><Inventories inventory={inventory} key={inventory._id}></Inventories>)
        }
      </div>
    </div>
  );
};

export default ManageInventory;