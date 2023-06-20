import React, { useState } from 'react';
import useHooks from '../../Hooks/useHooks';
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Inventories = ({inventory}) => {
 
  const {inventories,setInventories}=useHooks()
  const {img,_id,name,price,quantity,supplierName,description}=inventory;
const [user]=useAuthState(auth)

  const deleteInventory=(id)=>{
    
const proceed = window.confirm('are you sure')
if(proceed){
const url =`https://electronics-warehouse-website.onrender.com/inventory/${id}`
fetch(url,{
method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
  // console.log(data)
  const remaining = inventories.filter(inventory=>inventory._id !==id);
  setInventories(remaining)
})
}
  }



  return (
  
<div className=''>
<div className='cart'>
      <img src={img} alt="" />
      <h4>Product: {name}</h4>
      <h4>Price: {price}</h4>
      <h4>Quantity: {quantity}</h4>
      <h4>Supplier Name: {supplierName}</h4>
      <h5>Description: {description.slice(0,100)}</h5>
      <div className='mt-4 mb-4 align-center'>
      <button disabled={user?.email !="hsomon940@gmail.com" ? true : false }  className=' btn btn-danger btn-lg ' onClick={()=>deleteInventory(_id)}>Delete</button>
      </div>
    </div>
    </div>
  );
};

export default Inventories;