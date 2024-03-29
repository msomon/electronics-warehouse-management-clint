import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'
const Inventory = ({inventory}) => {
  const {img,name,_id,description,price,quantity,supplierName}=inventory;
 

  const navigate = useNavigate()

  const navigateDetail= (id) =>{
    navigate(`/inventorydetails/${id}`)
      }
  return (
   
    <div className='cart'>
      <img  src={img} alt="" />
      <h4>Product: {name}</h4>
      <h4>Price: {price}</h4>
      <h4>Quantity: {quantity}</h4>
      <h4>Supplier Name: {supplierName}</h4>
      <h5>Description: {description.slice(0,100)}</h5>
      <button onClick={()=>navigateDetail(_id)} className='btn btn-primary rounded-pill'>Update: {name}</button>
    </div>

    
  );
};

export default Inventory;