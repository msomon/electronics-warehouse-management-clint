import React from 'react';
import { useNavigate } from 'react-router-dom';
import useHooks from '../../Hooks/useHooks';
import Inventories from '../Inventories/Inventories';
import MyItems from '../MyItems/MyItems';
import './ManageInventory.css'
const ManageInventory = () => {
  const navigate = useNavigate()
  const {inventories}=useHooks()
  // console.log(items); 

  const addInventory=() =>{
    navigate('/additems')
  }

  return (
    <div>
      <button className='btn btn-success btn-lg mt-5' onClick={addInventory} >Add Inventory</button>
      <div className='inventories'>
        {
           inventories?.map(inventory =><Inventories inventory={inventory} key={inventory._id}></Inventories>)
        }
      </div>
      <MyItems></MyItems>
    </div>
  );
};

export default ManageInventory;