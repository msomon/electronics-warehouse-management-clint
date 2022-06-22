import React from 'react';
import { useNavigate } from 'react-router-dom';
import useHooks from '../../Hooks/useHooks';
import Inventoriesall from '../Inventoriesall/Inventoriesall';
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
      <div className='btninventory'>
      <button className='btn btn-success btn-lg mt-5' onClick={addInventory} >Add Inventory</button>

      </div>
      <div className='inventories'>
        {
           inventories?.map(inventory =><Inventoriesall inventory={inventory} key={inventory._id}></Inventoriesall>)
        }
      </div>
      <MyItems></MyItems>
    </div>
  );
};

export default ManageInventory;