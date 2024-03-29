import React from 'react';
import { useNavigate } from 'react-router-dom';
import useHooks from '../../Hooks/useHooks';
import Inventoriesall from '../Inventoriesall/Inventoriesall';
import './ManageInventory.css'
import Loading from '../RequireAuth/Loading/Loading';

const ManageInventory = () => {
  const navigate = useNavigate()
  const {inventories}=useHooks()
  
  const addInventory=() =>{
    navigate('/additems')
  }

  return (
    <div>
      <div className='btninventory text-center'>
      <button className='btn btn-success btn-lg mt-5 ' onClick={addInventory} >Add Inventory</button>

      </div>
      <div className='inventories'>

      { !inventories && <Loading></Loading>}
        
        {
           inventories?.map(inventory =><Inventoriesall inventory={inventory} key={inventory._id}></Inventoriesall>)
        }
      </div>
     
    </div>
  );
};

export default ManageInventory;